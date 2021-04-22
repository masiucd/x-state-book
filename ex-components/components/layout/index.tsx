import styled from "@emotion/styled";
import React from "react";
import { GlobalStyles } from "../styles/global-styles";
import Nav from "./nav";

const Main = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
