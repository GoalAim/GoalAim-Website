import { useContext } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ListElement = styled.li`
`

const FooterLink = ({to, text}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <Link style={{textDecoration: "none", color: theme.TextColor, fontSize: 20}} to={to}>{text}</Link>
    );
};

const Footer = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <Box style={{backgroundColor: theme.BackgroundColor, display: "flex", flexDirection: "column"}}>
            <Box style={{alignSelf: "center", width: "80%", border: "solid", borderWidth: 2, borderColor: theme.BorderColor, borderRadius: 100, marginTop: "100px", marginBottom: "100px"}}></Box>
            <Box style={{marginBottom: "50px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                <ul style={{display: "flex", flexDirection: "row", justifyContent: "space-between", listStyleType: "none", width: "20%"}}>
                    <ListElement>
                        <FooterLink to="/" text="Home" />
                    </ListElement>
                    <ListElement>
                        <FooterLink to="/privacy-policy" text="Privacy" />
                    </ListElement>
                    <ListElement>
                        <FooterLink to="/support" text="Support" />
                    </ListElement>
                    <ListElement>
                        <FooterLink to="/blog" text="Blog" />
                    </ListElement>
                </ul>
                <Typography style={{color: theme.TextColor, fontSize: 20}}>© 2025 - GoalAim</Typography>
            </Box>
        </Box>
    );
};

export default Footer;