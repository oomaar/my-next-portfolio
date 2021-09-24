import styled from 'styled-components';
import { lgScreen, mdScreen } from '../../global';
import { headerHeight } from '../../global/styles/GlobalStyle';

export const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #111;
  color: #eee;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  height: ${headerHeight};

  @media screen and (max-width: ${mdScreen}) {
    flex-direction: column;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  width: 25%;
  gap: 2rem;

  @media screen and (max-width: ${lgScreen}) {
    gap: 1rem;
    padding: 0 1rem;
  }

  @media screen and (max-width: ${mdScreen}) {
    gap: 0.5rem;
    justify-content: center;
  }
`;

export const Link = styled.a`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  transition: 0.2s;

  :hover {
    border-bottom: 4px solid #ef9fa7;
  }
`;

export const Lashes = styled.div`
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
  position: absolute;
  top: -0.8rem;
  display: none;
  transition: all 0.4s cubic-bezier(.175,.885,.32,1.275);
  
  .lash__1 {
    transform: rotate(-35deg);
  }

  .lash__2 {
    height: 11px;
  }

  .lash__3 {
    transform: rotate(40deg);
  }
`;

export const Lash = styled.div`
  width: 4px;
  height: 9px;
  background-color: #fff;
  border-radius: 25%;
  transition: all 0.4s cubic-bezier(.175,.885,.32,1.275);
  background: #eee;
`;

export const Eye = styled.div`
  width: 28px;
  height: 20px;
  background: #eee;
  display: inline-block;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

export const Ball = styled.div`
  width: 12px;
  height: 12px;
  background: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;


export const EyeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  width: 25%;

  :hover ${Lashes} {
    display: flex;
  }

  :hover ${Ball} {
    width: 15px;
    height: 15px;
    transition: all 0.4s cubic-bezier(.175,.885,.32,1.275);
  }

  @media screen and (max-width: ${lgScreen}) {
    display: none;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  width: 25%;
  gap: 2rem;
  font-size: clamp(1.3rem, 2vw, 1.5rem);
  transition: all 0.4s cubic-bezier(.175,.885,.32,1.275);

  @media screen and (max-width: ${lgScreen}) {
    gap: 1rem;
    justify-content: center;
  }
`;