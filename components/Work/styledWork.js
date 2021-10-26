import styled from 'styled-components';
import { lgScreen, mdScreen, xlScreen } from '../../global';

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  padding: 0;

  @media screen and (max-width: ${mdScreen}) {
    gap: 0.5rem;
  }
`;

export const ListItem = styled.li`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.titleColor};
  cursor: pointer;
  list-style: none;

  @media screen and (max-width: ${mdScreen}) {
    font-size: 1.1rem;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;
`;

export const Slider = styled.div`
  width: 90%;
  margin: 2rem auto;

  @media screen and (max-width: ${xlScreen}) {
    width: 100%;
  }
`;

export const Slide = styled.div`
  display: none;
  z-index: 0;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &.active {
    display: flex;
  }

  @media screen and (max-width: ${lgScreen}) {
    flex-direction: column;
  }
`;

export const SlideImageContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${lgScreen}) {
    height: 350px;
  }
`;

export const SlideImage = styled.img`
  border-radius: 1rem;
  width: 450px;

  @media screen and (max-width: ${xlScreen}) {
    width: 350px;
  }

  @media screen and (max-width: ${lgScreen}) {
    width: 300px;
  }

  @media screen and (max-width: ${mdScreen}) {
    width: 270px;
  }
`;

export const CarouselFeature = styled.div`
  width: 50%;

  @media screen and (max-width: ${lgScreen}) {
    width: 80%;
  }

  @media screen and (max-width: ${mdScreen}) {
    width: 90%;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: clamp(2.092rem, 5vw, 4rem);
`;

export const SubTitle = styled.h1`
  font-size: clamp(1.125rem, 3vw, 1.625rem);
`;


export const Arrow = styled.span`
    cursor: pointer;
    border: 0;
    z-index: 100;
    width: auto;
    padding: 1rem;
    font-size: clamp(26px, 10vw, 40px);
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    transition: 0.5s ease-in-out;
    color: ${({ theme }) => theme.colors.buttonColor};
    
    
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
    
    &.prev {
      margin-right: auto;
    }
    
    &.next {
      margin-left: auto;
    }
`;

export const Arrows = styled.div`
  position: absolute;
  top: 60%;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  z-index: 100;

  @media screen and (max-width: ${xlScreen}) {
    top: 85%;
  }

  @media screen and (max-width: ${lgScreen}) {
    top: 30%;
  }

  @media screen and (max-width: 400px) {
    top: 50%;
  }
`;

export const Dots = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 100;
`;

export const Dot = styled.span`
  display: inline-block;
  cursor: pointer;
  height: 0.8rem;
  width: 0.8rem;
  margin: 0 5px;
  background-color: #808080;
  border-radius: 50%;
  transition: all 0.5s ease;

  &.active-dot {
    background-color: ${({ theme }) => theme.colors.buttonColor};
  }
    
  &:hover {
    transform: scale(1.2);
  }
`;