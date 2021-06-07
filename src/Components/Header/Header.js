import React from "react";
import {
    Typography,
    AppBar,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
} from "@material-ui/core";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


const Header = () => (
    <>
        <CssBaseline/>
        <AppBar position={"relative"}>
            <Toolbar>
                <MonetizationOnIcon></MonetizationOnIcon>
                <Typography variant={"h6"}>Wirtualny Portfel</Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="sm">
                    <Typography variant={"h2"} align={"center"} color={"textPrimary"} gutterBottom>
                        WIRTUALNY PORTFEL
                    </Typography>
                    <Typography variant={"h5"} align={"center"} color={"text Secondary"} paragraph={true}>
                        Tutaj możesz śledzić swoje inwestycje i wartość majatku!

                    </Typography>

                </Container>
            </div>
        </main>


    </>
);

export default Header;