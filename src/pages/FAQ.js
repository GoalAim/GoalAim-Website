import { Box, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../utils/themes/ThemeContext";

const FAQPage = () => {

    const {theme} = useContext(ThemeContext);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <Box sx={{display: "flex", flexDirection: "column", backgroundColor: theme.BackgroundColor, padding: "10px", paddingTop: "50px", alignItems: "center"}}>
            <Typography sx={{color: theme.MainColor, fontSize: 50, textAlign: "center", fontWeight: "bold", marginBottom: "30px"}}>FAQ</Typography>
            <Box sx={{display: "flex", flexDirection: "column", width: {width} < 1024 ? "90%" : "60%"}}>
                <Box sx={{backgroundColor: theme.SecondaryBackgroundColor, borderRadius: 5, padding: "10px", marginBottom: "30px"}}>
                    <Typography sx={{color: theme.TextColor, fontSize: 22, textAlign: "left", fontWeight: "bold", marginBottom: "10px"}}>❓ What is GoalAim?</Typography>
                    <Typography sx={{color: theme.TextColor, fontSize: 17, textAlign: "left", marginBottom: "20px"}}>GoalAim is a gamified progress tracker that connects with your favorite platforms like Spotify, Steam, and GitHub to turn your daily habits into a visual adventure. Track your growth and stay motivated!</Typography>
                </Box>
                <Box sx={{backgroundColor: theme.SecondaryBackgroundColor, borderRadius: 5, padding: "10px", marginBottom: "30px"}}>
                    <Typography sx={{color: theme.TextColor, fontSize: 22, textAlign: "left", fontWeight: "bold", marginBottom: "10px"}}>🔐 Is my data safe?</Typography>
                    <Typography sx={{color: theme.TextColor, fontSize: 17, textAlign: "left", marginBottom: "20px"}}>Yes. We only collect the minimum data necessary to visualize your progress. Your information is encrypted, and we never share it with third parties.</Typography>
                </Box>
                <Box sx={{backgroundColor: theme.SecondaryBackgroundColor, borderRadius: 5, padding: "10px", marginBottom: "30px"}}>
                    <Typography sx={{color: theme.TextColor, fontSize: 22, textAlign: "left", fontWeight: "bold", marginBottom: "10px"}}>💎 Is GoalAim free?</Typography>
                    <Typography sx={{color: theme.TextColor, fontSize: 17, textAlign: "left", marginBottom: "20px"}}>Yes! The basic features are completely free. We plan to introduce a premium version with advanced insights and customization options in the future.</Typography>
                </Box>
                <Box sx={{backgroundColor: theme.SecondaryBackgroundColor, borderRadius: 5, padding: "10px", marginBottom: "30px"}}>
                    <Typography sx={{color: theme.TextColor, fontSize: 22, textAlign: "left", fontWeight: "bold", marginBottom: "10px"}}>👤 Can I use GoalAim without connecting any account?</Typography>
                    <Typography sx={{color: theme.TextColor, fontSize: 17, textAlign: "left", marginBottom: "20px"}}>No, you must create an account at your first connexion.</Typography>
                </Box>
                <Box sx={{backgroundColor: theme.SecondaryBackgroundColor, borderRadius: 5, padding: "10px", marginBottom: "30px"}}>
                    <Typography sx={{color: theme.TextColor, fontSize: 22, textAlign: "left", fontWeight: "bold", marginBottom: "10px"}}>🧱 Why is there a golem in the app?</Typography>
                    <Typography sx={{color: theme.TextColor, fontSize: 17, textAlign: "left", marginBottom: "20px"}}>Your golem represents your growth—it evolves as you make progress across your connected platforms. Think of it as your personal avatar on your journey to success!</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default FAQPage;