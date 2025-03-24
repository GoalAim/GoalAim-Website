import { useState } from 'react';
import ComingSoonPage from './pages/ComingSoon';
import ThemeProvider from './utils/themes/ThemeProvider';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
    const [theme, setTheme] = useState({});

    return (
        <ThemeProvider value={{ theme, setTheme }}>
            <BrowserRouter>
                <MainContent />
            </BrowserRouter>
        </ThemeProvider>
    );
};

function MainContent() {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === "/admin" || location.pathname === "/login";

    return (
        <>
            {!hideHeaderFooter && <Navbar />}
            <Routes>
                <Route path="*" element={<ComingSoonPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            {!hideHeaderFooter && <Footer />}
        </>
    );
};

export default App;
