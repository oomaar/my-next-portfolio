import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme, theme } from "..";

export const Layout = ({ children }) => {
    const [themeColor] = useState('light');

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={themeColor === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeProvider>
    );
};