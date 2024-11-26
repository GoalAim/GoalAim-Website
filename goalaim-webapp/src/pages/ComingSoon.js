import React from "react";
import { COLORS } from "../colors"

const ComingSoonPage = () => {
    return (
        <div style={{backgroundColor: COLORS.BackgroundColor, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh"}}>
            <img src="images/goalaim-logo.png" alt="logo-goalaim" width="250px" />
            <p style={{fontFamily: "Poppins", color: COLORS.White, fontSize: "calc(10px + 2vmin)"}}>Coming soon...</p>
        </div>
    );
};

export default ComingSoonPage;