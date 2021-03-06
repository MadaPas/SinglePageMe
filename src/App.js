import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";

import "./styles/name.scss";

import { ThemeProvider } from "./components/Theme/ThemeProvider";
import { Credits } from "./utils/Credits";
import { Home } from "./pages/Home";
import { HelmetMeta } from "./HelmetMeta";

const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const App = () => {
    Credits();

    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
            <HelmetMeta />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/resume" component={Resume} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};