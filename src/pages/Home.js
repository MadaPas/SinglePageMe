import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Navigation } from "../components/Header/Navigation";
import { Content } from "../components/Content/Content";

import { makeStyles } from "@material-ui/core/styles";

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

export const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navigation />
            <Content mainClasses={classes.main} />
            <Footer footerClasses={classes.footer} />
        </div>
    );
};