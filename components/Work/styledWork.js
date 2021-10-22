import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  top: 100px;
  max-width: 100%;
  margin-bottom: 20px;
  padding: 0 10px;
  height: 60vh;

  @media screen and (max-width: 1000px) {
    height: 50vh;
  }
`;

export const Slider = styled.div`
  width: 70%;
  height: 100%;
  margin-left: auto;
  z-index: 0;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 70%;
  }
`;

export const SubContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Slide = styled.div`
  display: none;
  z-index: 0;
  width: 100%;
  height: 100%;

  &.active {
      display: inline-block;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media screen and (max-width: 1000px) {
      margin: 100px 0 0;
  }
`;

export const CarouselFeature = styled.div`
  position: absolute;
  top: 35%;
  left: 18%;
  z-index: 200;

  @media screen and (max-width: 1000px) {
    top: 5%;
    left: 5%;
  }
`;

export const Title = styled.h1`
  color: ${({ loon }) => loon};
  font-size: clamp(2.092rem, 5vw, 4rem);
  text-transform: uppercase;
  font-family: 'Geforce', Helvetica, sans-serif;
`;

export const SubTitle = styled.h1`
  color: ${({ loon }) => loon};
  font-family: 'Geforce', Helvetica, sans-serif;
  max-width: 450px;
  text-transform: uppercase;
  font-size: clamp(1.125rem, 3vw, 1.625rem);
`;

export const Dots = styled.div`
    position: absolute;
    top: calc(100% + 5rem);
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
        background-color: ${({ theme }) => theme.colors.primary};
        &:hover {
            background-color: ${({ theme }) => theme.colors.hover};
        }
    }
    &:hover {
        transform: scale(1.2);
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
    color: ${({ theme }) => theme.colors.primary};
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