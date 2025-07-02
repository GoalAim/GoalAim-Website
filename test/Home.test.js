import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../src/pages/Home';
import BlogPage from '../src/pages/Blog';
import Support from '../src/pages/Support';
import Error404Page from '../src/pages/404';
import ComingSoonPage from '../src/pages/ComingSoon';
import PrivacyPolicy from '../src/pages/PrivacyPolicy';
import Login from '../src/pages/Login';
import ThemeProvider from '../src/utils/themes/ThemeProvider';
import { themes } from '../src/utils/themes/ThemeContext';
import { MemoryRouter } from 'react-router-dom';

describe('Home page', () => {
  it('displays message under newsletter form', () => {

    const dummyToggle = jest.fn();
    const testValue = { theme: themes.light, toggleTheme: dummyToggle };

    render(
        <ThemeProvider value={testValue}>
            <HomePage />
        </ThemeProvider>
    );
    expect(screen.getByText("You can do it!")).toBeInTheDocument();
  });
});

describe('Blog page', () => {
  it('displays introduction message', () => {

    const dummyToggle = jest.fn();
    const testValue = { theme: themes.light, toggleTheme: dummyToggle };

    render(
        <ThemeProvider value={testValue}>
            <BlogPage />
        </ThemeProvider>
    );
    expect(screen.getByText("Stay informed with curated updates, insights, and strategies to help you grow and reach your next goals.")).toBeInTheDocument();
  });
});

describe('Support page', () => {
  it('displays title of the page', () => {

    const dummyToggle = jest.fn();
    const testValue = { theme: themes.light, toggleTheme: dummyToggle };

    render(
        <ThemeProvider value={testValue}>
            <Support />
        </ThemeProvider>
    );
    expect(screen.getByText("Support")).toBeInTheDocument();
  });
});

describe('404 page', () => {
  it('displays error 404', () => {
    const dummyToggle = jest.fn();
    const testValue = { theme: themes.light, toggleTheme: dummyToggle };

    render(
      <MemoryRouter>
        <ThemeProvider value={testValue}>
          <Error404Page />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Error 404")).toBeInTheDocument();
  });
});

describe('Coming soon page', () => {
  it('displays coming soon message', () => {

    const dummyToggle = jest.fn();
    const testValue = { theme: themes.light, toggleTheme: dummyToggle };

    render(
      <MemoryRouter>
        <ThemeProvider value={testValue}>
            <ComingSoonPage />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByText("Coming soon...")).toBeInTheDocument();
  });
});

describe('Login page', () => {
  it('displays login message', () => {

    const dummyToggle = jest.fn();
    const testValue = { theme: themes.light, toggleTheme: dummyToggle };

    render(
      <MemoryRouter>
        <ThemeProvider value={testValue}>
            <Login />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(screen.getByText("Only for administrators")).toBeInTheDocument();
  });
});

// describe('Privacy page', () => {
//   it('displays last update', () => {

//     const dummyToggle = jest.fn();
//     const testValue = { theme: themes.light, toggleTheme: dummyToggle };

//     render(
//         <ThemeProvider value={testValue}>
//             <PrivacyPolicy />
//         </ThemeProvider>
//     );
//     expect(screen.getByText("Last updated: April 05, 2025")).toBeInTheDocument();
//   });
// });
