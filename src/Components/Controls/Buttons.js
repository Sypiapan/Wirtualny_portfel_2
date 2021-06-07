import React from "react";
import {Button} from "@material-ui/core";

import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
        root: {
                margin: theme.spacing(0.5),
            },
            label:{

            textTransform: "none",
            }


    }
))

export default function Buttons(props) {
    const {text, size, color, variant, onClick, ...other} = props;
    const classes = useStyles();

    return (
        <Button classes={{root: classes.root, label: classes.label}}
            siec={size }
            color={color}
            variant={variant}
            onClick={onClick}
            {...other}
        >{text}
        </Button>

    )


};
