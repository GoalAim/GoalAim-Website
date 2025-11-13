import { Box, Typography } from "@mui/material";
import { ThemeContext } from "../utils/themes/ThemeContext";
import { useContext, useEffect, useState } from "react";

const Article = ({ title, content }) => {
    const { theme } = useContext(ThemeContext);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: theme.SecondaryBackgroundColor,
                color: theme.TextColor,
                padding: "20px",
                marginTop: "30px",
                borderRadius: "12px",
                width: width < 1024 ? "90%" : "60%",
                alignSelf: "center",
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "30px" }}>
                {title}
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>{content}</Typography>
        </Box>
    );
};

const BlogPage = () => {
    const { theme } = useContext(ThemeContext);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.BackgroundColor,
                padding: "50px",
                paddingTop: "50px"
            }}
        >
            <Typography sx={{color: theme.MainColor, fontSize: 50, textAlign: "center", fontWeight: "bold", marginBottom: "30px"}}>Blog</Typography>
            <Typography
                sx={{
                    fontSize: 20,
                    color: theme.TextColor,
                    textAlign: "center",
                    width: width < 1024 ? "80%" : "50%",
                    alignSelf: "center",
                    marginBottom: "50px"
                }}
            >
                Stay informed with curated updates, insights, and strategies to help you grow and reach your next goals.
            </Typography>

            <Article
                title={"Newsletter, 13th November, 2025"}
                content={
                    "GoalAim isn’t just a gamified tracker. It’s a distributed system that connects different data streams into a single visual experience.\n\nWe designed our backend using a modular architecture — separating data ingestion (API connections) from visualization logic. This makes it easier to scale as we integrate new sources.\n\n - Our backend normalizes raw data into standardized progress events.\n   - The app interprets those events to update visual metrics and gamified elements.\n   - Everything is handled through a secure, token-based system ensuring data privacy.\n\nBuilding motivation starts with building good architecture."
                }
            />
            <Article
                title={"Newsletter, 4th July, 2025"}
                content={
                    "Hey there! 👋\n\nWelcome to the very first GoalAim newsletter — we’re thrilled to have you on board.\nAt GoalAim, we’re building a productivity app that turns your everyday actions into visible, gamified progress.\n\nWhether you’re coding, listening to music, playing games, or completing tasks — your actions feed your golem and shape your personal evolution.\nWe’ve started connecting with platforms you already use — like GitHub, Spotify, and Steam — to make that progress automatic and meaningful.\n\nAnd here’s the big news:\n\n🧪 Our Alpha version is coming very soon.\nA small group of early testers will get exclusive access to try GoalAim before anyone else, explore the experience, and shape what comes next."
                }
            />
        </Box>
    );
};

export default BlogPage;
