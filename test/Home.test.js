import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../src/pages/Home';
import ThemeProvider from '../src/utils/themes/ThemeProvider';
import { themes } from '../src/utils/themes/ThemeContext';

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
