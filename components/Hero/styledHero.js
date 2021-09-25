import styled from 'styled-components';
import { lgScreen, xlScreen } from '../../global';

export const HeroContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${xlScreen}) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  width: 40%;
  margin-top: 5rem;
  margin-left: auto;

  @media screen and (max-width: ${xlScreen}) {
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (max-width: ${lgScreen}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.biggestFontSize};
  background: ${({ theme }) => theme.colors.textGradient};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-family: 'Grechen Fuemen', cursive;

  @media screen and (max-width: 1500px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 1300px) {
    font-size: ${({ theme }) => theme.fontSize.biggerFontSize};
  }

  @media screen and (max-width: ${xlScreen}) {
    font-size: ${({ theme }) => theme.fontSize.bigFontSize};
  }
`;

export const Subtitle = styled.h3`
  width: 80%;
  font-size: clamp(1.2rem, 2vw, 1.4rem);

  @media screen and (max-width: ${xlScreen}) {
    width: 50%;
  }

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
  }
`;