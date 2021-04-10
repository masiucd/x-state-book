import React from "react";
import Layout from "./components/layout";
import Routes from "./routes";

const App = (): JSX.Element => {
  return (
    <Layout>
      {" "}
      <Routes />
    </Layout>
  );
};

export default App;
