import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/themes/ThemeContext";
import styled from 'styled-components';
import { IoMenu } from "react-icons/io5";
import { Box, Button } from "@mui/material";
import { IoColorPaletteSharp } from "react-icons/io5";

const ListElement = styled.li`
`

const NavbarLink = ({to, text}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <Link style={{textDecoration: "none", color: theme.TextColor, fontSize: 32}} to={to}>{text}</Link>
    );
};

const Navbar = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);
    const [width, setWidth] = useState(window.innerWidth);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box style={{padding: "50px", backgroundColor: theme.BackgroundColor}}>
            <nav style={{display: "flex", flexDirection: "row", color: theme.TextColor, justifyContent: "space-around", alignItems: "center"}}>
                <Box component={"img"} src="images/goalaim-logo.png" width="100px" alt="GoalAim Logo" />
                {width < 1024 ? <IoMenu size={70} /> : 
                    <ul style={{display: "flex", padding: 0, flexDirection: "row", justifyContent: "space-between", listStyleType: "none", alignItems: "center", width: "50%"}}>
                        <ListElement>
                            <NavbarLink to="/" text="Home" />
                        </ListElement>
                        <ListElement>
                            <NavbarLink to="/feedbacks" text="Feedbacks" />
                        </ListElement>
                        <ListElement>
                            <NavbarLink to="/blog" text="Blog" />
                        </ListElement>
                        <Button sx={{backgroundColor: theme.SecondaryBackgroundColor, color: theme.TextColor, fontSize: 26, border: "1px solid", borderColor: theme.BorderColor, borderRadius: "100px", textTransform: "none", padding: "5px 40px"}} component={Link} to="/login">Login</Button>
                    </ul>
                }
                <IoColorPaletteSharp
                    style={{ cursor: isHovered ? "pointer" : "default" }}
                    size={40}
                    color={theme.TextColor}
                    onClick={() => toggleTheme()}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </nav>
        </Box>
    );
};

export default Navbar;