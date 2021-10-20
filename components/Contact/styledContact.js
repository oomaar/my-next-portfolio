import styled from 'styled-components';
import { lgScreen, xlScreen } from '../../global';

export const ContactContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;

  @media screen and (max-width: ${xlScreen}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media screen and (max-width: ${lgScreen}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContactCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardColor};
  border-radius: 1rem;
  padding: 1rem;
`;

export const ContactIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSize.bigFontSize};
`;

export const ContactTitle = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.fontSize.h1FontSize};
`;

export const ContactText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normalFontSize};
`;