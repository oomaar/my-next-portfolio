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

export const AboutHistory = styled.div`
  margin-top: 2rem;
`;

export const HistoryTitle = styled.h3`
  font-family: 'Grechen Fuemen', cursive;
  font-size: ${({ theme }) => theme.fontSize.bigFontSize};
`;

export const HistroryContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const HistoryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardColor};
  padding: 1rem;
  border-radius: 1rem;
  width: 400px;
  transition: ${tansition_04};

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
  }

  :hover {
    box-shadow: ${({ theme }) => theme.colors.shadowColor};
  }

  :nth-child(2) {
    align-self: center;
  }

  :nth-child(3) {
    align-self: flex-end;
  }

  :nth-child(4) {
    align-self: center;
  }

  h3 {
    font-family: 'Grechen Fuemen', cursive;
    font-size: ${({ theme }) => theme.fontSize.h1FontSize};
    color: ${({ theme }) => theme.colors.titleColor};
    letter-spacing: 0.3rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.normalFontSize};
    color: ${({ theme }) => theme.colors.textColor};
  }

  h6 {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.buttonColor};
    font-size: ${({ theme }) => theme.fontSize.smallFontSize};
  }
`;