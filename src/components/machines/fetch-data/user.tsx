import React from "react"
import { GithubUser } from "@utils/types"
import styled from "@emotion/styled"
import { elements, elevations } from "@styles/styled-variables"
// import Image from "next/image"

interface UserProps {
  user: GithubUser | null
}

const UserStyles = styled.section`
  margin: 0 auto;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${elevations.shadowLg};
  border: 1px solid ${elements.common};
`

const Img = styled.div`
  width: 100%;
  img {
    width: 100%;
    border: 2px solid ${elements.common};
    box-shadow: ${elevations.shadowLg};
  }
`

const Body = styled.div`
  padding: 0.2rem 0.5rem;
  margin-right: auto;
  a {
    p {
      border-bottom: 2px solid ${elements.common};
    }
  }
`

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <UserStyles>
      <Img>
        <img src={user?.avatar_url} alt={`user ${user?.name}`} width={300} height={300} />
      </Img>
      <Body>
        <a href={user?.html_url} target="_blank" rel="noopener noreferrer">
          {" "}
          <p>{user?.name}</p>
        </a>
        <p>{user?.location}</p>
        <p>{user?.type}</p>
      </Body>
    </UserStyles>
  )
}
export default User
