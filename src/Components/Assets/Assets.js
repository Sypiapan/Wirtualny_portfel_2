import React, {useState} from "react";
import PageHeader from "../PageHeader/PageHeader";
import Assetsform from "./Assetsform";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import {Paper, TableBody, TableRow, TableCell} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import UseTable from "../UseTable/UseTable";
import * as Dictionary from "../../Dictionary/Dictionary";

const useStyles = makeStyles(theme => ({
        pageContent: {

            margin: theme.spacing(5),
            padding: theme.spacing(3),
        },
    }


))

export default function Assets() {


    const TblContainer
        = UseTable();

    const classes = useStyles();
    const [records, setRecords] = useState(Dictionary.getAllInvestments());
    return (
        <>

            <PageHeader
                title={"Inwestycje"}
                subTitle={"Formularz wejściowy"}
                icon={<PlaylistAddIcon fontSize={"large"}></PlaylistAddIcon>}

            />
            <Paper className={classes.pageContent}>

                <Assetsform/>

                <TblContainer>
                    <TableBody>

                        {records.map(item=>(

                            <TableRow key={item.id}>

                                <TableCell>{item.number}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>{item.currency}</TableCell>
                                <TableCell>{item.number*item.price}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>

                </TblContainer>


            </Paper>


        </>

    )
};

