import { Hero, Portfolio } from "../components";
import { Headtag, Main } from "../global";
import portfolioData from "../data/portfolioData.json";

import styled, { keyframes } from 'styled-components';

export default function Home() {
  return (
    <div>
      <Headtag title="Omar's Portfolio | Resume" />

      <Main>
        <Hero data={portfolioData.hero} />
        <Portfolio data={portfolioData.portfolio} />

        <AnimationContainer>
          <CirclesContainer>

            <CircleContainer>
              <Circle></Circle>
            </CircleContainer>

            <Circle></Circle>
            <Circle></Circle>

          </CirclesContainer>
        </AnimationContainer>

      </Main>
    </div>
  )
};

const animation = keyframes`
  0% {
    transform-origin: 400% 50%;
    transform: rotate(0);
  }

  50% {
    transform-origin: 400% 50%;
    transform: rotate(360deg);
  }

  50.1% {
    transform-origin: -300% 50%;
    transform: rotate(0deg);
  }

  100% {
    transform-origin: -300% 50%;
    transform: rotate(-360deg);
  }
`;

const shadow = keyframes``;

const AnimationContainer = styled.div`
  height: 70vh;
  background-color: #222;
  margin-top: 5rem;
  border-radius: 1rem;
  position: relative;
`;

const CirclesContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const CircleContainer = styled.div`
  width: 400px;
  height: 200px;
  background: red;
  transform: translate(-50%, -50%);

  ::after {
    content: '';
    width: 20px;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    background: #000;
    border-radius: 50%;
  }
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  animation: ${animation} 10s linear infinite;

  :nth-child(2) {
    animation-delay: -0.3s;
    display: none;
  }

  :nth-child(3) {
    animation-delay: -0.6s;
    display: none;
  }
`;