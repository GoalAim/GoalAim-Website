import React from 'react';

const themes = {
    light: {
        BackgroundColor: '#F2F2F7', 
        SecondaryBackgroundColor: '#FFFFFF',
        BorderColor: '#CCCCCC',
        MainColor: '#99FFE4',
        TextColor: '#2D2F33',
        ErrorColor: '#FFB199',
    },
    dark: {
        BackgroundColor: '#17181C', 
        SecondaryBackgroundColor: '#2D2F33',
        BorderColor: '#5D5D60',
        MainColor: '#99FFE4',
        TextColor: '#F0F7F3',
        ErrorColor: '#FFB199',
    },
};

const ThemeContext = React.createContext(themes.light);

export { themes, ThemeContext };