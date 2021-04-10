import styled from "@emotion/styled";
import React from "react";
import { GlobalStyles } from "../styles/global-styles";

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
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
