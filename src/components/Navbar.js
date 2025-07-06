import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { IoMenu } from "react-icons/io5";
import { Box, Button } from "@mui/material";
// import { IoColorPaletteSharp } from "react-icons/io5";

const NavbarLink = ({to, text}) => {

    const {theme} = useContext(ThemeContext);

    return (
        <Link style={{textDecoration: "none", color: theme.TextColor, fontSize: 32}} to={to}>{text}</Link>
    );
};

const Navbar = () => {

    // const {theme, toggleTheme} = useContext(ThemeContext);
    const {theme} = useContext(ThemeContext);
    const [width, setWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false);
    // const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box style={{padding: "50px", backgroundColor: theme.BackgroundColor}}>
            <nav style={{display: "flex", flexDirection: "row", color: theme.TextColor, justifyContent: "space-around", alignItems: "center"}}>
                <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                    <Box component="img" src="images/Logo_Original.png" width="100px" alt="GoalAim Logo" />
                </Link>
                {width < 1024 ? <IoMenu size={70} onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer" }} /> : 
                    <ul style={{display: "flex", padding: 0, flexDirection: "row", justifyContent: "space-between", listStyleType: "none", alignItems: "center", width: "50%"}}>
                        <li style={{margin: "10px"}}>
                            <NavbarLink to="/" text="Home" />
                        </li>
                        <li style={{margin: "10px"}}>
                            <NavbarLink to="/faq" text="FAQ" />
                        </li>
                        <li style={{margin: "10px"}}>
                            <NavbarLink to="/support" text="Support" />
                        </li>
                        <li style={{margin: "10px"}}>
                            <NavbarLink to="/blog" text="Blog" />
                        </li>
                        <Button sx={{backgroundColor: theme.SecondaryBackgroundColor, color: theme.TextColor, fontSize: 26, border: "1px solid", borderColor: theme.BorderColor, borderRadius: "100px", textTransform: "none", padding: "5px 40px", ":hover": {backgroundColor: theme.BorderColor}}} component={Link} to="/login">Login</Button>
                    </ul>
                }
                {/* <IoColorPaletteSharp
                    style={{ cursor: isHovered ? "pointer" : "default", color: isHovered ? theme.TextColor + "88" : theme.TextColor}}
                    size={40}
                    onClick={() => toggleTheme()}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                /> */}
            </nav>
            {width < 1024 && menuOpen && (
                <ul style={{backgroundColor: theme.SecondaryBackgroundColor, padding: "20px", marginTop: "30px", listStyleType: "none", display: "flex", flexDirection: "column", borderRadius: 10 }}>
                    <li style={{ margin: "10px" }}>
                        <NavbarLink to="/" text="Home" />
                    </li>
                    <li style={{ margin: "10px" }}>
                        <NavbarLink to="/support" text="Support" />
                    </li>
                    <li style={{ margin: "10px" }}>
                        <NavbarLink to="/blog" text="Blog" />
                    </li>
                    <Button sx={{ backgroundColor: theme.SecondaryBackgroundColor, marginTop: "20px", color: theme.TextColor, fontSize: 26, border: "1px solid", borderColor: theme.BorderColor, borderRadius: "100px", textTransform: "none", padding: "5px 40px", ":hover": { backgroundColor: theme.BorderColor } }} component={Link} to="/login">Login</Button>
                </ul>
            )}
        </Box>
    );
};

export default Navbar;