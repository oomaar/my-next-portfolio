import styled from 'styled-components';

export const HeaderTag = styled.header`
  background-color: #111;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksList = styled.ul`
  display: flex;
`;

export const Link = styled.a``;

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
`;

export const Eye = styled.div`
  width: 28px;
  height: 20px;
  background: #fff;
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
  flex-direction: column;
  position: relative;
  cursor: pointer;

  :hover ${Lashes} {
    display: flex;
  }

  :hover ${Ball} {
    width: 15px;
    height: 15px;
    transition: all 0.4s cubic-bezier(.175,.885,.32,1.275);
  }
`;

export const SocialBox = styled.div``;

export const SocialLink = styled.div``;