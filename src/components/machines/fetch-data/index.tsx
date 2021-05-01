import { GithubUser } from "@utils/types"
import { useMachine } from "@xstate/react"
import React from "react"
import { assign, createMachine } from "xstate"
import User from "./user"
import Button from "@components/styled/button"
import styled from "@emotion/styled"

import CurrentState from "@components/elements/current-state"

const GITHUB_URL = "https://api.github.com/users/"

const getUser = (username = "masiucd") =>
  fetch(GITHUB_URL + username)
    .then(data => data.json())
    .then(d => d)
    .catch(err => {
      console.error(err)
      return err
    })

interface Ctx {
  username: string
  user: null | GithubUser
  error: null | Error
}

const userMachine = createMachine<Ctx>(
  {
    id: "user",
    initial: "idle",
    context: {
      username: "masiucd",
      user: null,
      error: null,
    },

    states: {
      idle: {
        on: {
          FETCH: { target: "loading" },
        },
      },
      loading: {
        invoke: {
          id: "getUser",
          src: (ctx: Ctx) => getUser(ctx.username),
          onDone: {
            target: "success",
            actions: assign({ user: (ctx: Ctx, event) => event.data }),
          },
          onError: {
            target: "failure",
            actions: assign({ error: (ctx: Ctx, event) => event.data }),
          },
        },
      },
      success: {
        on: {
          RESET: {
            actions: "resetContext",
            target: "idle",
          },
        },
      },
      failure: {
        on: {
          RETRY: { target: "loading" },
        },
      },
    },
  },
  {
    actions: {
      resetContext: assign<Ctx>({
        username: "masiucd",
        user: null,
        error: null,
      }),
    },
  }
)

const Wrapper = styled.section`
  margin-bottom: 2rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  padding: 1rem;
  width: 90%;
  margin: 0 auto 1rem auto;
`

const FetchData = (): JSX.Element => {
  const [state, send] = useMachine(userMachine)
  const hasUser = Boolean(state.context.user)

  return (
    <Wrapper>
      <CurrentState stateValue={state.value} />

      <ButtonWrapper>
        <Button
          onClick={() => send("FETCH")}
          isDisabled={state.value === "loading" || state.value === "success"}
        >
          start fetch
        </Button>

        {hasUser && <Button onClick={() => send("RESET")}> resetUser </Button>}
      </ButtonWrapper>

      {hasUser && <User user={state.context.user} />}
    </Wrapper>
  )
}

export default FetchData
