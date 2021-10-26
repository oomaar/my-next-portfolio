import styled from 'styled-components';
import { tansition_04, mdScreen } from '../../global/styles/GlobalStyle';

export const HistoryContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  width: 100%;
`;

export const HistoryCard = styled.div`
  margin: 0 1rem;

  div {
    background-color: ${({ theme }) => theme.colors.bodyColor};
    padding: 1rem;
    border-radius: 1rem;
    max-width: 400px;
    width: 100%;
    transition: ${tansition_04};
  }

  @media screen and (max-width: ${mdScreen}) {
    margin: 0;
  }

  :nth-child(1) {
    align-self: flex-start;
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

  :nth-child(5) {
    align-self: flex-start;
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
    color: ${({ theme }) => theme.colors.iconColor};
    font-size: ${({ theme }) => theme.fontSize.smallFontSize};
  }
`;