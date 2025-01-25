import React, { useContext } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";

const ComingSoonPage = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div style={{backgroundColor: theme.BackgroundColor, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh"}}>
            <img src="images/goalaim-logo.png" alt="logo-goalaim" width="250px" />
            <p style={{fontFamily: "Poppins", color: theme.TextColor, fontSize: "calc(10px + 2vmin)"}}>Coming soon...</p>
        </div>
    );
};

export default ComingSoonPage;