import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";

import "./styles/name.scss";

import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { Credits } from "./helpers/Credits";
import { Home } from "./pages/Home";
import { Loading } from "./components/Loading/Loading";
import { LoadingError } from "./components/Loading/LoadingError";
import { ErrorBoundary } from "./components/Loading/ErrorBoundary";
const Resume = lazy(() => import("./pages/Resume"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export const App = () => {
    Credits();

    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
                <ErrorBoundary fallback={<LoadingError />}>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/resume" component={Resume} />
                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </Router>
        </ThemeProvider>
    );
};