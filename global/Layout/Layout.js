import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme, theme } from "..";
import { useSelector } from "react-redux";
import { darkValue } from "../../redux/slices/darkSlice";
import { Footer, Header } from "../../components";

export const Layout = ({ children }) => {
    const darkThemeState = useSelector(darkValue);

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={darkThemeState === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
            </ThemeProvider>
        </ThemeProvider>
    );
};