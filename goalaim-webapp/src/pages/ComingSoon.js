import React, { useContext } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { Box, Typography } from "@mui/material";

const ComingSoonPage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box style={{backgroundColor: theme.BackgroundColor, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh"}}>
            <Box component={"img"} src="images/goalaim-logo.png" alt="logo-goalaim" width="250px" />
            <Typography style={{fontFamily: "Poppins", color: theme.TextColor, fontSize: "calc(10px + 3vmin)", marginTop: "25px"}}>Coming soon...</Typography>
        </Box>
    );
};

export default ComingSoonPage;