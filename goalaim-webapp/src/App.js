import { useState } from 'react';
import ComingSoonPage from './pages/ComingSoon';
import ThemeProvider from './utils/themes/ThemeProvider';

function App() {

	const [theme, setTheme] = useState({});

	return (
		<ThemeProvider value={{theme, setTheme}}>
			<ComingSoonPage />
		</ThemeProvider>
	);
}

export default App;
