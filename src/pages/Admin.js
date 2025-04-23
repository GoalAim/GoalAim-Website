import { Box, Typography } from "@mui/material"
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext } from "react";

const Admin = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box sx={{backgroundColor: theme.BackgroundColor, height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "30px"}}>
            <Typography sx={{color: theme.TextColor, fontSize: 64, fontWeight: "bold"}}>Admin Interface</Typography>
        </Box>
    );
};

export default Admin;
