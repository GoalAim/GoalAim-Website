import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import Stylesheet from "reactjs-stylesheet";
import { Box, Button, TextField, Typography } from "@mui/material";

const HomePage = () => {

    const {theme} = useContext(ThemeContext);
    const [width, setWidth] = useState(window.innerWidth);
    const styles = createStyles(theme, width);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box sx={{display: "flex", flexDirection: "column", backgroundColor: theme.BackgroundColor, padding: "50px", paddingTop: "100px"}}>
            <Typography sx={{fontSize: 20, color: theme.TextColor, textAlign: "center", width: width < 1024 ? "80%" : "30%", alignSelf: "center"}}>Get exclusive tips, updates, and insights to help you aim higher and achieve your goals.</Typography>
            <Typography sx={{fontSize: width < 1024 ? 56 : 64, color: theme.TextColor, textAlign: "center", marginTop: "30px"}}>Be in the Know with <b style={{fontWeight: "bold", color: theme.MainColor}}>GOALAIM!</b></Typography>
            <Box sx={styles.inputBlock}>
                <TextField sx={{input: {color: theme.TextColor}, paddingLeft: "15px", flex: 1, minWidth: "150px"}} variant="standard" slotProps={{input: {disableUnderline: true}}} placeholder="Enter your email to aim higher!" />
                <Button sx={styles.button}>Subscribe</Button>
            </Box>
        </Box>
    );
};

const createStyles = (theme, width) => Stylesheet.create({
    inputBlock: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        border: "solid",
        borderWidth: 2,
        borderColor: theme.MainColor,
        borderRadius: 100,
        backgroundColor: theme.SecondaryBackgroundColor,
        width: width < 1024 ? "80%" : "40%",
        alignSelf: "center",
        marginTop: "100px",
        padding: "15px"
    },
    button: {
        backgroundColor: theme.MainColor,
        border: "none",
        color: theme.TextColor,
        borderRadius: 100,
        padding: "12px 30px",
        fontSize: 16,
        cursor: "pointer",
        fontWeight: "bold",
        marginLeft: "15px"
    }
});

export default HomePage;