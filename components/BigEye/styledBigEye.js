import styled, { keyframes } from 'styled-components';
import { xlScreen } from '../../global';

const Bounce = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
`;

const Explore = keyframes`
  0% {
    transform: translateX(0);
  }

  10% {
    transform: translateX(-50px);
  }

  20% {
    transform: translateX(-50px) translateY(10px) scale(0.8);
  }

  30% {
    transform: translateX(-50px) translateY(-10px) scale(0.8);
  }

  40% {
    transform: translateX(50px) translateY(10px) scale(1.1);
  }

  50% {
    transform: translateX(50px) translateY(0) scale(1);
  }

  60% {
    transform: translateX(50px) translateY(-10px) scale(0.7);
  }

  70% {
    transform: translateX(50px) translateY(20px) scale(0.6);
  }

  80% {
    transform: translateX(0px) translateY(-30px) scale(1);
  }

  90% {
    transform: translateX(0) translateY(0) scale(0.8);
  }

  95% {
    transform: translateX(0) translateY(30px) scale(1);
  }

  100% {
    transform: translateX(0) translateY(0) scale(1);
  }
`;

const Explore2 = keyframes`
  0% { transform: translateX(0) translateY(0) scale(1); }
  5% { transfrom: translateX(0) translateY(0) scale(1); }
  10% { transform: translateX(-50px) scale(1); }
  20% { transform: translateX(-50px) translateY(-20px) scale(1); }
  30% { transform: translateX(-50px) translateY(0) scale(1); }
  40% { transform: translateX(-50px) translateY(20px) scale(1); }
  50% { transform: translateX(0) translateY(0) scale(1); }

  60% { transform: scale(1.1, 0.9) translateY(0); }
  62.5% { transform: scale(0.9, 1.1) translateY(0); }
  65% { transform: scale(1.05, 0.95) translateY(-20px); }
  67.5% { transform: scale(1, 1) translateY(0); }
  70% { transform: scale(1, 1) translateY(-7px); }
  72.5% { transform: scale(1, 1) translateY(0); }
  75% { transform: scale(1, 1) translateY(0); }
  77.5% { transform: scale(1) translateX(0) translateY(0); }

  80% { transform: translateX(-50px) translateY(30px) scale(0.7); }
  82.5% { transform: translateX(-40px) translateY(30px) scale(0.7); }
  85% { transform: translateX(-30px) translateY(30px) scale(0.7); }
  87.5% { transform: translateX(-20px) translateY(30px) scale(0.7); }
  90% { transform: translateX(-10px) translateY(30px) scale(0.7); }
  92.5% { transform: translateX(0px) translateY(30px) scale(0.7); }
  95% { transform: translateX(15px) translateY(30px) scale(0.7); }
  97.5% { transform: translateX(25px) translateY(30px) scale(0.7); }
  100% { transform: translateX(0) translateY(0) scale(1); }
`;

export const BigEyeContainer = styled.div`
  width: 40%;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;

  @media screen and (max-width: ${xlScreen}) {
    width: 100%;
    height: 450px;
  }
`;

export const BoxCenter = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 1rem;
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1300px) {
    width: 75%;
    height: 65%;
  }

  @media screen and (max-width: ${xlScreen}) {
    width: 100%;
  }
`;

export const Eye = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${Bounce} 4s linear infinite;

  @media screen and (max-width: 1300px) {
    width: 210px;
    height: 120px;
  }
  
  @media screen and (max-width: ${xlScreen}) {
    width: 200px;
    height: 120px;
    margin-top: 5rem;
  }
`;

export const Iris = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #000;
  animation: ${Explore2} 10s linear 4s infinite;

  @media screen and (max-width: 1300px) {
    width: 45px;
    height: 45px;
  }
`;

export const Lashes = styled.div`
  position: absolute;
  top: -90px;
  display: flex;
  gap: 5rem;
`;

export const Lash1 = styled.div`
  width: 15px;
  height: 70px;
  background: #fff;
  border-radius: 1rem;
  transform: rotate(140deg) translateY(-20px);
`;

export const Lash2 = styled.div`
  width: 15px;
  height: 70px;
  background: #fff;
  border-radius: 1rem;
`;

export const Lash3 = styled.div`
  width: 15px;
  height: 70px;
  background: #fff;
  border-radius: 1rem;
  transform: rotate(40deg) translateY(20px);
`;

export const Box1 = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(to bottom, #edca85, #e58cb7);
  border-radius: 1rem;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const Box2 = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(to bottom, #e58cb7, #a166e9);
  border-radius: 1rem;
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const Box3 = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(to bottom, #a166e9, #a0e9ff);
  border-radius: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const Box4 = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(to bottom, #edca85, #a0e9ff);
  border-radius: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const Box5 = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(to top, #e58cb7, #a166e9);
  border-radius: 1rem;
  position: absolute;
  bottom: -100px;
  left: 100px;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;