import { useContext } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";
import Stylesheet from "reactjs-stylesheet";

const HomePage = () => {

    const {theme} = useContext(ThemeContext);
    const styles = createStyles(theme);

    return (
        <div style={{display: "flex", flexDirection: "column", position: "absolute", backgroundColor: theme.BackgroundColor, height: "100%", width: "100%"}}>
            <p style={{fontSize: 20, color: theme.TextColor, textAlign: "center", width: "30%", alignSelf: "center"}}>Get exclusive tips, updates, and insights to help you aim higher and achieve your goals.</p>
            <p style={{fontSize: 64, color: theme.TextColor, textAlign: "center"}}>Be in the Know with <b style={{fontWeight: "bold", color: theme.MainColor}}>GOALAIM!</b></p>
            <div style={styles.inputBlock}>
                <input style={styles.input} placeholder="Enter your email to aim higher!" />
                <style>
                    {`
                        ::placeholder {
                            color: ${theme.TextColor};
                        }`
                    }
                </style>
                <button style={styles.button}>Subscribe</button>
            </div>
        </div>
    );
};

const createStyles = (theme) => Stylesheet.create({
    inputBlock: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "solid",
        borderWidth: 2,
        borderColor: theme.MainColor,
        borderRadius: 100,
        padding: 15,
        backgroundColor: theme.SecondaryBackgroundColor,
        width: "30%",
        alignSelf: "center",
    },
    input: {
        width: "100%",
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        color: theme.TextColor,
        padding: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: theme.MainColor,
        border: "none",
        color: theme.TextColor,
        borderRadius: 100,
        padding: "12px 24px",
        fontSize: 16,
        cursor: "pointer",
    }
});

export default HomePage;