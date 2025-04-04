import { Box, Button, TextField, Typography } from "@mui/material"
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { handleLogin } from "../API/Authentification";

const Login = () => {

    const {theme} = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isError, setIsError] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin({username: formData.username, password: formData.password, setIsError: setIsError});
    };

    return (
        <Box>
            <Box sx={{backgroundColor: theme.BackgroundColor, height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Box component={"img"} src="images/goalaim-logo.png" width="100px" alt="GoalAim Logo" />
                <Typography sx={{color: theme.TextColor, fontSize: 32, fontWeight: "bold", marginBottom: "50px"}}>Login</Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{display: "flex", flexDirection: "column"}}>
                    <TextField sx={{input: {color: theme.TextColor}, margin: "10px", width: "80vw", maxWidth: "400px", "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: theme.BorderColor,
                        },
                        "&:hover fieldset": {
                            borderColor: theme.SecondaryColor,
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: theme.MainColor,
                        },
            }}} id="username" variant="outlined" placeholder="Username" required onChange={handleChange} value={formData.username} name="username" />
                    <TextField sx={{input: {color: theme.TextColor}, margin: "10px", width: "80vw", maxWidth: "400px", "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: theme.BorderColor,
                        },
                        "&:hover fieldset": {
                            borderColor: theme.SecondaryColor,
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: theme.MainColor,
                        },
            }}} id="password" variant="outlined" placeholder="Password" required onChange={handleChange} value={formData.password} name="password" type="password" />
                    <Button sx={{marginTop: "15px", backgroundColor: theme.MainColor, color: theme.TextColor, borderRadius: 2, padding: "10px 50px", fontSize: 16, ":hover": {backgroundColor: theme.SecondaryColor}}} type="submit">Login</Button>
                </Box>
                <Box sx={{marginTop: "20px"}}>
                    {isError ? <Typography sx={{color: theme.ErrorColor}}>You are not autorized to login as an administrator.</Typography> : <Typography sx={{color: theme.TextColor}}>Only for administrators</Typography>}
                </Box>
                <Button sx={{marginTop: "100px", backgroundColor: theme.SecondaryBackgroundColor, color: theme.TextColor, borderRadius: 2, padding: "10px 30px", fontSize: 16, ":hover": {backgroundColor: theme.BorderColor}}} component={Link} to='/'>Back</Button>
            </Box>
        </Box>
    );
};

export default Login;
