import LoadingSpinner from "@components/animated/loading-spinner";
import React from "react";
import { Route, Switch } from "react-router-dom";

const SimpleCounter = React.lazy(() => import("../components/simple-counter"));
const SimpleThemeToggler = React.lazy(() => import("../components/simple-theme-toggler"));
const Timer = React.lazy(() => import("../components/timer"));

const Routes = (): JSX.Element => {
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route exact path="/" component={SimpleCounter} />
        <Route exact path="/toggler-theme" component={SimpleThemeToggler} />
        <Route exact path="/timer" component={Timer} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
