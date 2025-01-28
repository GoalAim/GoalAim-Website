import { useState } from 'react';
import ComingSoonPage from './pages/ComingSoon';
import ThemeProvider from './utils/themes/ThemeProvider';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';

function App() {

	const [theme, setTheme] = useState({});

	return (
		<ThemeProvider value={{theme, setTheme}}>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<ComingSoonPage />} />
					<Route path="/" element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
