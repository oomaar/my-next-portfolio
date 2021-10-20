import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Header Height
export const headerHeight = '6rem';

// Favorite Color
const hueColor = '240';

// Viewports
export const smScreen = '280px';
export const mdScreen = '568px';
export const lgScreen = '768px';
export const xlScreen = '1024px';

// Transitions
export const transition_02 = "all 0.2s cubic-bezier(.175,.885,.32,1.275)";
export const tansition_04 = "all 0.4s cubic-bezier(.175,.885,.32,1.275)";

// Borders
const borderColorLight = `4px solid #ff8243`;
const borderColorDark = `4px solid #ef9fa7`;

// Shadows
const shadowLight = '0px 10px 15px -3px hsla(0, 0%, 0%, 0.06), 0px 4px 6px -2px hsla(0, 0%, 0%, 0.05)';
const shadowDark = '0px 10px 15px -3px hsla(220, 13%, 91%, 0.06), 0px 4px 6px -2px hsla(220, 13%, 91%, 0.05)';

export const theme = {
  fontSize: {
    biggestFontSize: '5.8rem',
    biggerFontSize: '3.9rem',
    bigFontSize: '2.4rem',
    h1FontSize: '1.5rem',
    h2FontSize: '1.25rem',
    h3FontSize: '1.12rem',
    normalFontSize: '0.938rem',
    smallFontSize: '0.813rem',
    smallerFontSize: '0.75rem',
    fontWeight: {
      fontLight: 300,
      fontSemiBold: 400,
      fontBold: 600
    }
  }
};

export const lightTheme = {
  colors: {
    linkColor: `#bd1616`,
    buttonText: `#fff`,
    buttonColor: `hsl(240, 42%, 65%)`,
    shadowColor: `${shadowLight}`,
    titleColor: `hsl(${hueColor}, 8%, 15%)`,
    textColor: `hsl(${hueColor}, 8%, 45%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    bodyColor: `#eee`,
    borderColor: `${borderColorLight}`,
    containerColor: 'rgba(210, 210, 210)',
    cardColor: "#eee",
    scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
    textGradient: `linear-gradient(to right, #ff8243, #c89595, #2c2891, #316b83)`,
  },
};

export const darkTheme = {
  colors: {
    linkColor: `#edca85`,
    buttonText: `#333`,
    buttonColor: `#82b42f`,
    shadowColor: `${shadowDark}`,
    titleColor: `hsl(${hueColor}, 8%, 95%)`,
    textColor: `hsl(${hueColor}, 8%, 75%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    bodyColor: `#111`,
    borderColor: `${borderColorDark}`,
    containerColor: `#222`,
    cardColor: "#333",
    scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
    textGradient: `linear-gradient(to right, #edca85, #e58cb7, #a166e9, #a0e9ff)`,
  },
};

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.textColor};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  /* Scroll Bar */
  ::-webkit-scrollbar {
    width: 0.6rem;
    background-color: ${({ theme }) => theme.colors.scrollBarColor};
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollThumbColor};
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.textColorLight};
  }
`;

// Layout
export const Main = styled.main`
  max-width: 1700px;
  margin: calc(${headerHeight} + 1rem) auto 2rem;
  padding: 1rem;

  @media screen and (max-width: ${smScreen}) {
    padding: 0.5rem;
  }
`;

export const Section = styled.section`
  margin-top: 10rem;
  height: ${({ work }) => work ? "100vh" : "auto"};
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${xlScreen}) {
    margin: 3rem 0;
  }
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.containerColor};
  width: 80%;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
  }
`;

// Section Title
export const Title = styled.h2`
  background: ${({ theme }) => theme.colors.textGradient};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-family: 'Grechen Fuemen', cursive;
`;