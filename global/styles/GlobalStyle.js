import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

// Favorite Color
const hueColor = '240';

// Viewports
export const smScreen = '280px';
export const mdScreen = '568px';
export const lgScreen = '768px';
export const xlScreen = '1024px';

export const theme = {
  fontSize: {
    bigFontSize: '2rem',
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
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    firstColorSecond: `hsl(${hueColor}, 69%, 61%)`,
    firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
    firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
    titleColor: `hsl(${hueColor}, 8%, 15%)`,
    textColor: `hsl(${hueColor}, 8%, 45%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    inputColor: `hsl(${hueColor}, 70%, 96%)`,
    bodyColor: `#eee`,
    containerColor: '#111',
    scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
    textGradient: `linear-gradient(hsl(${hueColor}, 4%, 24%), hsl(${hueColor}, 4%, 8%))`,
  },
};

export const darkTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    firstColorSecond: `hsl(${hueColor}, 30%, 8%)`,
    firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
    firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
    titleColor: `hsl(${hueColor}, 8%, 95%)`,
    textColor: `hsl(${hueColor}, 8%, 75%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    inputColor: `hsl(${hueColor}, 29%, 16%)`,
    bodyColor: `#111`,
    containerColor: `#eee`,
    scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
    textGradient: `linear-gradient(hsl(${hueColor}, 4%, 24%), hsl(${hueColor}, 4%, 8%))`,
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
`;

// Layout
export const Main = styled.main`
  max-width: 1700px;
  margin: 2rem auto;
  padding: 1rem;
`;