import { useState } from 'react';
import ComingSoonPage from './pages/ComingSoon';
import ThemeProvider from './utils/themes/ThemeProvider';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

	const [theme, setTheme] = useState({});

	return (
		<ThemeProvider value={{theme, setTheme}}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="*" element={<ComingSoonPage />} />
					<Route path="/" element={<HomePage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
