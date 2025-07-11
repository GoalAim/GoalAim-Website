import { useState } from 'react';
import ThemeProvider from './utils/themes/ThemeProvider';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Admin from './pages/Admin';
import Login from './pages/Login';
import Support from './pages/Support';
import Error404Page from './pages/404';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import BlogPage from './pages/Blog';
import FAQPage from './pages/FAQ';

function App() {
    const [theme, setTheme] = useState({});

    return (
        <ThemeProvider value={{ theme, setTheme }}>
            <BrowserRouter
                future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}
            >
                <ScrollToTop />
                <MainContent />
            </BrowserRouter>
        </ThemeProvider>
    );
};

function MainContent() {
    const location = useLocation();
    const hideHeaderFooter = location.pathname !== "/" && location.pathname !== "/support" && location.pathname !== "/privacy-policy" && location.pathname !== "/blog" && location.pathname !== "/faq";

    return (
        <>
            {!hideHeaderFooter && <Navbar />}
            <Routes>
                <Route path="*" element={<Error404Page />} />
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/admin" element={<Admin />} /> */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/support" element={<Support />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            {!hideHeaderFooter && <Footer />}
        </>
    );
};

export default App;
