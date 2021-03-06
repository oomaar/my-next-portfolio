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

const imgShadowLight = `0px 4px 30px hsla(0, 0%, 0%, 0.5)`;
const imgShadowDark = `0px 4px 30px hsla(0, 100%, 100%, 0.1)`;

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
    linkColor: `#000`,
    buttonText: `#fff`,
    buttonColor: `hsl(240, 42%, 65%)`,
    shadowColor: `${shadowLight}`,
    imageShadow: `${imgShadowLight}`,
    titleColor: `hsl(${hueColor}, 8%, 15%)`,
    textColor: `hsl(${hueColor}, 8%, 45%)`,
    bodyColor: `#eee`,
    footerColor: "#fff",
    borderColor: `${borderColorLight}`,
    containerColor: 'rgba(210, 210, 210)',
    cardColor: "#eee",
    scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
    scrollBarHover: `hsl(${hueColor}, 8%, 65%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
    textGradient: `linear-gradient(to right, #ff8243, #c89595, #2c2891, #316b83)`,
    iconColor: `#A31768`
  },
};

export const darkTheme = {
  colors: {
    linkColor: `#edca85`,
    buttonText: `#fff`,
    buttonColor: `#318ce7`,
    shadowColor: `${shadowDark}`,
    imageShadow: `${imgShadowDark}`,
    titleColor: `hsl(${hueColor}, 8%, 95%)`,
    textColor: `hsl(${hueColor}, 8%, 75%)`,
    bodyColor: `#111`,
    footerColor: "#000",
    borderColor: `${borderColorDark}`,
    containerColor: `#222`,
    cardColor: "#333",
    scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
    scrollBarHover: `hsl(${hueColor}, 8%, 65%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
    textGradient: `linear-gradient(to right, #edca85, #e58cb7, #a166e9, #a0e9ff)`,
    iconColor: `#3D56B2`
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
    background-color: ${({ theme }) => theme.colors.scrollBarHover};
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
  margin: 10rem auto 0;
  display: flex;
  justify-content: center;
  max-width: 1500px;

  @media screen and (max-width: ${xlScreen}) {
    margin: 3rem 0;
  }

  @media screen and (max-width: ${mdScreen}) {
    padding: 0.3rem;
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
  position: relative;

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
  }
`;

export const Icon = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textColor};
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