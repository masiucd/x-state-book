import React from "react";
import { Route, Switch } from "react-router-dom";

const SimpleCounter = React.lazy(() => import("../components/simple-counter"));
const SimpleThemeToggler = React.lazy(() => import("../components/simple-theme-toggler"));

const Routes = (): JSX.Element => {
  return (
    <React.Suspense fallback={<div>...loading</div>}>
      <Switch>
        <Route exact path="/" component={SimpleCounter} />
        <Route exact path="/toggler-theme" component={SimpleThemeToggler} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
