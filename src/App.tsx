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
              <Route path="/skill-detail/name/:name" component={ToEntity}></Route>
              <Route path="/skill-detail/id/:id" component={ToEntity}></Route>
              <Route path="/skill-overview" component={EntityOverview}></Route>
              <Route path="/spell-detail/name/:name" component={ToEntity}></Route>
              <Route path="/spell-detail/id/:id" component={ToEntity}></Route>
              <Route path="/spell-overview" component={EntityOverview}></Route>
              <Route path="/race-detail/name/:name" component={ToEntity}></Route>
              <Route path="/race-detail/id/:id" component={ToEntity}></Route>
              <Route path="/race-overview" component={EntityOverview}></Route>
              <Route path="/talent-overview" component={EntityOverview}></Route>
              <Route path="/talent-detail/name/:name" component={ToEntity}></Route>
              <Route path="/talent-detail/id/:id" component={ToEntity}></Route>
              <Route path="/power-overview" component={EntityOverview}></Route>
              <Route path="/power-detail/name/:name" component={ToEntity}></Route>
              <Route path="/power-detail/id/:id" component={ToEntity}></Route>
              <Route path="/power-overview" component={EntityOverview}></Route>
              <Route path="/randomTable-detail/name/:name" component={ToEntity}></Route>
              <Route path="/randomTable-detail/id/:id" component={ToEntity}></Route>
              <Route path="/randomTable-overview" component={EntityOverview}></Route>
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
