import { useContext } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";

const Curve = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <svg width="100%" height="300">
            <path
                d="M 0,50
                Q 25,25 40,50
                t 30,30 30,0 30,0 50,0 30,300"
                stroke="black"
                fill={theme.MainColor}
            />
        </svg>
    );
};

const Footer = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div style={{backgroundColor: theme.BackgroundColor, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style={{width: "80%", border: "solid", borderWidth: 2, borderColor: theme.BorderColor, borderRadius: 100, marginTop: "150px", marginBottom: "150px"}}></div>
            {/* <Curve /> */}
        </div>
    );
};

export default Footer;