import React from 'react';

const themes = {
    light: {
        BackgroundColor: '#F2F2F7', 
        SecondaryBackgroundColor: '#FFFFFF',
        BorderColor: '#CCCCCC',
        MainColor: '#29940A',
        SecondaryColor: '#C1EAB5',
        TextColor: '#1D252F',
        InputColor: '#E1E1E1',
        ErrorColor: '#FF0000',
    },
    dark: {
        BackgroundColor: '#1D252F', 
        SecondaryBackgroundColor: '#232C39',
        BorderColor: '#3B485D',
        MainColor: '#29940A',
        SecondaryColor: '#C1EAB5',
        TextColor: '#E1E1E1',
        InputColor: '#D9D9D9',
        ErrorColor: '#FF0000',
    },
};

const ThemeContext = React.createContext(themes.light);

export { themes, ThemeContext };