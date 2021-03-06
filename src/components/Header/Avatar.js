import React from "react";
import { Link, ListItem, ListItemAvatar, Avatar } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import { primary, white } from "../Theme/Themes";
import { FirstName, LastName, Initials } from "../../utils/Names";
import "../../styles/name.scss";

const useStyles = makeStyles((theme) =>
    createStyles({
        green: {
            color: white,
            backgroundColor: primary,
        },
    })
);

export const AvatarName = () => {
    const classes = useStyles();
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.green}>{Initials}</Avatar>
            </ListItemAvatar>
            <Link
                href="#home"
                className="logo fade-up fade-up-1"
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
            >
                {FirstName}
                <span className="logo__inner">{LastName}</span>
            </Link>
        </ListItem>
    );
};