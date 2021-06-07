import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";



const useStyles = makeStyles(theme => ({
        root: {
            "& .MuiFormControl-root": {
                display: 'flex',
                width: "20%",
                margin: theme.spacing(2),

            }
        },

    }
))
export default function Form(props) {
    const classes = useStyles();
    const {children, ...other} =props;
    return (
        <form className={classes.root} autoComplete={"off"} {...other} >
            {props.children}
        </form>
    )
};