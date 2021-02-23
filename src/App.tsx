import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import { MyThemeProvider } from "./components/theme/MyThemeProvider";
import { CompleteLoadingSpinner } from "./components/Loading";
import AppWrapper from "./components/AppWrapper";
import { HashRouter } from "react-router-dom";

const ToEntity = lazy(() => import("./components/general_elements/details/ToEntity"));
const EntityOverview = lazy(() => import("./components/general_elements/EntityOverview"));

const Help = lazy(() => import("./components/help/Help"));
const Home = lazy(() => import("./components/home/Home"));
const Options = lazy(() => import("./components/options/Options"));
const Statistics = lazy(() => import("./components/statistics/Statistics"));

const App = () => {
  return (
    <MyThemeProvider>
      <HashRouter>
        <AppWrapper>
          <Suspense fallback={<CompleteLoadingSpinner />}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/home" component={Home}></Route>
              <Route path="/statistics" component={Statistics}></Route>
              <Route path="/options" component={Options}></Route>
              <Route path="/help" component={Help}></Route>
            </Switch>
          </Suspense>
        </AppWrapper>
      </HashRouter>
    </MyThemeProvider>
  );
};

export default App;
