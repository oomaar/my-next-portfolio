import styled from 'styled-components';
import { lgScreen, mdScreen, xlScreen } from '../../global';

export const PortfolioContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Container = styled.div`
  background-color: #222;
  height: 80vh;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (max-width: ${xlScreen}) {
    height: 90vh;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.bigFontSize};
`;

export const SubTitle = styled.h1`
  text-align: center;
  font-size: clamp(${({ theme }) => theme.fontSize.h1FontSize}, 2vw, ${({ theme }) => theme.fontSize.bigFontSize});
`;

export const Carousel = styled.div`
  margin: 5rem 0;
`;

export const Slide = styled.div`
  align-items: center;
  gap: 1.5rem;
  display: none;

  &.active {
    display: flex;
  }

  @media screen and (max-width: ${xlScreen}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 500px;
  border-radius: 1rem;
  cursor: pointer;

  @media screen and (max-width: 1300px) {
    width: 400px;
  }

  @media screen and (max-width: ${xlScreen}) {
    position: relative;
    bottom: 50px;
  }

  @media screen and (max-width: ${lgScreen}) {
    width: 400px;
  }

  @media screen and (max-width: ${mdScreen}) {
    width: 300px;
  }
`;

export const CarouselData = styled.div`
  width: 500px;

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const CarouselTitle = styled.p`
  font-size: clamp(1.5rem, 2vw, 1.7rem);
  font-weight: ${({ theme }) => theme.fontSize.fontWeight.fontBold};
`;

export const CarouselSubTitle = styled.p`
  font-size: 17px;
`;

export const CarouselButton = styled.a`
  background: #edca85;
  padding: 0.5rem 1rem;
  color: #000;
  transition: all 0.5s;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.h3FontSize};
  border: 0;
  outline: 0;
  letter-spacing: 1px;

  :hover {
    background-color: #e58cb7;
  }
`;