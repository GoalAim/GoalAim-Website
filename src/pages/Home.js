import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import Stylesheet from "reactjs-stylesheet";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

const HomePage = () => {

    const {theme} = useContext(ThemeContext);
    const [width, setWidth] = useState(window.innerWidth);
    const styles = createStyles(theme, width);
    const [isSent, setIsSent] = useState("None");

    const [formData, setFormData] = useState({
        email: "",
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const portalId = process.env.REACT_APP_PORTAL_ID;
        const formId = process.env.REACT_APP_FORM_ID_NEWSLETTER;
        const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
    
        const payload = {
            fields: [
                { name: "email", value: formData.email },
            ],
        };
    
        try {
            await axios.post(url, payload, {
                headers: { "Content-Type": "application/json" },
            });
            setFormData({
                email: "",
            });
            setIsSent("Sent");
        } catch (error) {
            setIsSent("Error");
            console.error("Error submitting form", error);
        }
    };


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box sx={{display: "flex", flexDirection: "column", backgroundColor: theme.BackgroundColor, padding: "50px", paddingTop: "100px"}}>
            <Typography sx={{fontSize: 20, color: theme.TextColor, textAlign: "center", width: width < 1024 ? "80%" : "30%", alignSelf: "center"}}>Get exclusive tips, updates, and insights to help you aim higher and achieve your goals.</Typography>
            <Typography sx={{fontSize: width < 1024 ? 56 : 64, color: theme.TextColor, textAlign: "center", marginTop: "30px"}}>Be in the Know with <b style={{fontWeight: "bold", color: theme.MainColor}}>GOALAIM!</b></Typography>
            <Box component="form" onSubmit={handleSubmit} sx={styles.inputBlock}>
                <TextField sx={{input: {color: theme.TextColor, textAlign: width < 1024 ? "center" : "left"}, paddingLeft: "15px", flex: 1, minWidth: "150px"}} variant="standard" slotProps={{input: {disableUnderline: true}}} placeholder="Enter your email" required onChange={handleChange} value={formData.email} name="email" id="email" />
                <Button sx={styles.button} type="submit">Subscribe</Button>
            </Box>
            {isSent === "Sent" ? <Typography sx={{color: theme.MainColor, textAlign: "center"}}>You are now subscribe to our newsletter</Typography> : isSent === "Error" ? <Typography sx={{color: theme.ErrorColor, textAlign: "center"}}>An error occurred</Typography> : <Typography sx={{color: theme.TextColor, textAlign: "center"}}>You can do it!</Typography>}
        </Box>
    );
};

const createStyles = (theme, width) => Stylesheet.create({
    inputBlock: {
        display: "flex",
        flexDirection: width < 1024 ? "column" : "row",
        alignItems: "center",
        justifyContent: width < 1024 ? "center" : "space-between",
        border: "solid",
        borderWidth: 2,
        borderColor: theme.MainColor,
        borderRadius: 100,
        backgroundColor: theme.SecondaryBackgroundColor,
        width: width < 1024 ? "80%" : "40%",
        alignSelf: "center",
        marginTop: "100px",
        marginBottom: "15px",
        padding: "15px"
    },
    button: {
        backgroundColor: theme.BorderColor,
        border: "none",
        color: theme.TextColor,
        borderRadius: 100,
        padding: "12px 30px",
        fontSize: 16,
        cursor: "pointer",
        fontWeight: "bold",
        marginLeft: width < 1024 ? "0px" : "15px",
        marginTop: width < 1024 ? "15px" : "0 px",
        ":hover": {backgroundColor: theme.MainColor}
    }
});

export default HomePage;