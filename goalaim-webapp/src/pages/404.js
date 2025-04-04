import { Box, Button, Typography } from "@mui/material"
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Error404Page = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{backgroundColor: theme.BackgroundColor, height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Box component={"img"} src="images/goalaim-logo.png" width="200px" alt="GoalAim Logo" />
            <Typography sx={{color: theme.MainColor, fontSize: 50, fontWeight: "bold", marginTop: "50px"}}>Error 404</Typography>
            <Typography sx={{color: theme.TextColor, fontSize: 32, fontWeight: "bold"}}>Page Not Found</Typography>
            <Button sx={{marginTop: "100px", backgroundColor: theme.SecondaryBackgroundColor, color: theme.TextColor, borderRadius: 2, padding: "10px 30px", fontSize: 16, ":hover": {backgroundColor: theme.BorderColor}}} component={Link} to='/'>Back to GoalAim</Button>
        </Box>
    );
};

export default Error404Page;
