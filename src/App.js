import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import "./styles/name.scss";

import { Footer } from "./components/Footer/Footer";
import { Content } from "./components/Content/Content";
import { Navigation } from "./components/Header/Navigation";
import { Theme } from "./components/Theme/Theme";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        marginTop: "auto",
        marginBottom: "auto",
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
    },
    fab: {
        margin: theme.spacing(2),
    },
}));

export const App = () => {
    const classes = useStyles();

    return (
        <Theme>
            <CssBaseline />
            <div className={classes.root}>
                <Navigation />
                <Content mainClasses={classes.main} />
                <Footer footerClasses={classes.footer} />
            </div>
        </Theme>
    );
};