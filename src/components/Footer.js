import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FooterLink = ({to, text}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <Link style={{textDecoration: "none", color: theme.TextColor, fontSize: 20}} to={to}>{text}</Link>
    );
};

const Footer = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box style={{backgroundColor: theme.BackgroundColor, display: "flex", flexDirection: "column"}}>
            <Box style={{alignSelf: "center", width: "80%", border: "solid", borderWidth: 2, borderColor: theme.BorderColor, borderRadius: 100, marginTop: "100px", marginBottom: "100px"}}></Box>
            <Box style={{marginBottom: "50px", display: "flex", flexDirection: width < 1024 ? "column" : "row", alignItems: "center", justifyContent: "space-around"}}>
                <ul style={{display: "flex", flexDirection: "row", justifyContent: "center", listStyleType: "none", width: "20vw", marginRight: "35px"}}>
                    <li style={{margin: "10px"}}>
                        <FooterLink to="/" text="Home" />
                    </li>
                    <li style={{margin: "10px"}}>
                        <FooterLink to="/privacy-policy" text="Privacy" />
                    </li>
                    <li style={{margin: "10px"}}>
                        <FooterLink to="/faq" text="FAQ" />
                    </li>
                    <li style={{margin: "10px"}}>
                        <FooterLink to="/support" text="Support" />
                    </li>
                    <li style={{margin: "10px"}}>
                        <FooterLink to="/blog" text="Blog" />
                    </li>
                </ul>
                <Typography style={{color: theme.TextColor, fontSize: 20}}>© 2025 - GoalAim</Typography>
            </Box>
        </Box>
    );
};

export default Footer;