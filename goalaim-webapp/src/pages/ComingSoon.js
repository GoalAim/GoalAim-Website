import React, { useContext } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ComingSoonPage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box style={{backgroundColor: theme.BackgroundColor, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh"}}>
            <Box component={"img"} src="images/goalaim-logo.png" alt="logo-goalaim" width="200px" />
            <Typography style={{fontFamily: "Poppins", color: theme.TextColor, fontSize: "calc(10px + 3vmin)", marginTop: "25px"}}>Coming soon...</Typography>
            <Button sx={{marginTop: "100px", backgroundColor: theme.SecondaryBackgroundColor, color: theme.TextColor, borderRadius: 2, padding: "10px 30px", fontSize: 16, ":hover": {backgroundColor: theme.BorderColor}}} component={Link} to='/'>Back to GoalAim</Button>
        </Box>
    );
};

export default ComingSoonPage;