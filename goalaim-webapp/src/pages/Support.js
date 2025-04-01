import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import axios from "axios";

const Support = () => {

    const {theme} = useContext(ThemeContext);
    const [isSent, setIsSent] = useState("None");

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
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
                { name: "message", value: formData.message },
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
                message: "",
            });
            setIsSent("Sent");
        } catch (error) {
            setIsSent("Error");
            console.error("Error submitting form", error);
        }
    };
    
    return (
        <Box sx={{display: "flex", flexDirection: "column", backgroundColor: theme.BackgroundColor, padding: "50px", paddingTop: "50px", alignItems: "center"}}>
            <Typography sx={{color: theme.MainColor, fontSize: 50, textAlign: "center", fontWeight: "bold", marginBottom: "30px"}}>Support</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{display: "flex", flexDirection: "column"}}>
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    <TextField sx={{input: {color: theme.TextColor}, margin: "10px", width: "40vw", maxWidth: "400px", "& .MuiOutlinedInput-root": {
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
                    <TextField sx={{input: {color: theme.TextColor}, margin: "10px", width: "40vw", maxWidth: "400px", "& .MuiOutlinedInput-root": {
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
                </Box>
                <TextField sx={{input: {color: theme.TextColor}, margin: "10px", width: "80vw + 10px", "& .MuiOutlinedInput-root": {
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
                <TextField sx={{input: {color: theme.TextColor}, margin: "10px", width: "80vw + 10px", "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: theme.BorderColor,
                    },
                    "&:hover fieldset": {
                        borderColor: theme.SecondaryColor,
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: theme.MainColor,
                    },
                    "& .MuiInputBase-input": {
                        color: theme.TextColor,
                    },
                    }}} id="message" variant="outlined" placeholder="Write your message here" required onChange={handleChange} value={formData.message} name="message" multiline rows={6} />
                <Button sx={{marginTop: "30px", marginBottom: "15px", backgroundColor: theme.MainColor, color: theme.TextColor, borderRadius: 2, padding: "10px 50px", fontSize: 16, ":hover": {backgroundColor: theme.SecondaryColor}}} type="submit">Submit</Button>
                {isSent === "Sent" ? <Typography sx={{color: theme.MainColor, textAlign: "center"}}>Message sent successfully</Typography> : isSent === "Error" ? <Typography sx={{color: theme.ErrorColor, textAlign: "center"}}>An error occurred while sending the message</Typography> : <></>}
            </Box>
        </Box>
    );
};

export default Support;