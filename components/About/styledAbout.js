import styled from 'styled-components';
import { tansition_04 } from '../../global/styles/GlobalStyle';
import { xlScreen, mdScreen } from "../../global";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutSubContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
  
  @media screen and (max-width: ${xlScreen}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${xlScreen}) {
    width: 100%;
  }
`;

export const AboutImage = styled.img`
  height: 500px;
  border-radius: 1rem;

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
    height: auto;
  }
`;

export const BioContainer = styled.div`
  width: 50%;

  @media screen and (max-width: ${xlScreen}) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const AboutBio = styled.p`
  font-size: ${({ theme }) => theme.fontSize.h3FontSize};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const AboutButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.h3FontSize};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  color: ${({ theme }) => theme.colors.buttonText};
  border: 0;
  outline: 0;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  transition: ${tansition_04};
`;