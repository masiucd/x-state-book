import { useMachine } from "@xstate/react";
import React, { useEffect, useState } from "react";
import { assign, createMachine } from "xstate";

export interface Context {
  user?: any;
}
interface Data {
  user: any;
}
interface Variables {
  id: any;
}

export type Events =
  | {
      type: "FETCH";
      value: string;
    }
  | { type: "FETCH" }
  | { type: "CANCEL" };

const fetchMachine = createMachine<Context, Events>({
  id: "usersAPI",
  initial: "idle",
  context: {
    user: null,
  },
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    loading: {
      // @ts-ignore
      invoke: {
        id: "fetchUser",
        src: (_, event) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${event.value}`).then(data =>
            data.json()
          ),
        onDone: {
          target: "resolved",
          actions: assign({
            user: (_, event) => event.data,
          }),
        },
        onError: "rejected",
      },
      on: {
        CANCEL: {
          target: "idle",
        },
      },
    },
    resolved: {
      type: "final",
    },
    rejected: {
      on: {
        FETCH: "loading",
      },
    },
  },
});

const Users = (): JSX.Element => {
  const [state, send] = useMachine(fetchMachine);
  const [inputId, setInputId] = useState<string>("");

  const { user } = state.context;

  useEffect(() => {
    if (inputId.length > 0) {
      send({ type: "FETCH", value: inputId });
    }
    if (inputId.length === 0) {
      send("CANCEL");
    }
  }, [inputId, send, state.value]);
  console.log(user);
  console.log(inputId);
  return (
    <div>
      <h1>Users</h1>
      {user && user.name}
      <input type="text" onChange={e => setInputId(e.target.value)} />
    </div>
  );
};

export default Users;
