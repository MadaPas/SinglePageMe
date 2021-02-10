import React from "react";
import { Typography, Container } from "@material-ui/core";

import { IconsRow } from "./Icons";
import { Decrypt, DecryptOnce } from "./Decrypt";
import Resume from "../../resume.json";
import "../../styles/content.scss";

export const Content = (props) => {
    return (
        <Container component="main" className={props.mainClasses} maxWidth="sm">
            <div className="centerTextMobile">
                <Typography variant="h5" component="h2" gutterBottom>
                    {Resume.basics.x_title}
                </Typography>
                <Typography variant="h2" component="h1" gutterBottom>
                    <DecryptOnce text={Resume.basics.name} />
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    <Decrypt texts={Resume.basics.jobs} />
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {Resume.basics.summary}
                </Typography>
                <br />
                <IconsRow />
            </div>
        </Container>
    );
};
