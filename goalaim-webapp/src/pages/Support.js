import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import axios from "axios";

const Support = () => {

    const {theme} = useContext(ThemeContext);

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const portalId = process.env.REACT_APP_PORTAL_ID;
        const formId = process.env.REACT_APP_FORM_ID;
        const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
    
        const payload = {
            fields: [
                { name: "firstname", value: formData.firstname },
                { name: "lastname", value: formData.lastname },
                { name: "email", value: formData.email },
            ],
        };
    
        try {
            await axios.post(url, payload, {
                headers: { "Content-Type": "application/json" },
            });
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
            });
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };
    
    return (
        <Box sx={{display: "flex", flexDirection: "column", backgroundColor: theme.BackgroundColor, padding: "50px", paddingTop: "100px", alignItems: "center"}}>
            <Typography sx={{color: theme.TextColor, fontSize: 40, textAlign: "center"}}>Support</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{display: "flex", flexDirection: "column"}}>
                <TextField sx={{input: {color: theme.TextColor}, margin: "10px", width: "40vh", "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: theme.BorderColor,
                    },
                    "&:hover fieldset": {
                        borderColor: theme.SecondaryColor,
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: theme.MainColor,
                    },
                    }}} id="firstname" variant="outlined" placeholder="First Name" required onChange={handleChange} value={formData.firstname} name="firstname" />
                <TextField sx={{input: {color: theme.TextColor}, margin: "10px", width: "40vh", "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: theme.BorderColor,
                    },
                    "&:hover fieldset": {
                        borderColor: theme.SecondaryColor,
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: theme.MainColor,
                    },
                    }}} id="lastname" variant="outlined" placeholder="Last Name" required onChange={handleChange} value={formData.lastname} name="lastname" />
                <TextField sx={{input: {color: theme.TextColor}, margin: "10px", width: "40vh", "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: theme.BorderColor,
                    },
                    "&:hover fieldset": {
                        borderColor: theme.SecondaryColor,
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: theme.MainColor,
                    },
                    }}} id="email" variant="outlined" placeholder="Email" required onChange={handleChange} value={formData.email} name="email" />
                <Button sx={{marginTop: "15px", backgroundColor: theme.MainColor, color: theme.TextColor, borderRadius: 2, padding: "10px 50px", fontSize: 16}} type="submit">Submit</Button>
            </Box>
        </Box>
    );
};

export default Support;