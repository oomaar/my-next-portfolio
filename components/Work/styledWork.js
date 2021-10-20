import styled from 'styled-components';
import { mdScreen, xlScreen, lgScreen } from '../../global';
import { tansition_04 } from '../../global/styles/GlobalStyle';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media screen and (max-width: ${mdScreen}) {
    gap: 0;
  }
`;

export const NavLinks = styled.button`
  outline: 0;
  border: 0;
  border-bottom: 4px solid transparent;
  background: transparent;
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: clamp(1.2rem, 2vw, 2rem);
  transition: ${tansition_04};

  :hover {
    border-bottom: ${({ theme }) => theme.colors.borderColor};
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  overflow-y: scroll;

  @media screen and (max-width: ${xlScreen}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${lgScreen}) {
    grid-template-columns: repeat(1, 1fr);
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardColor};
  height: 500px;
  border-radius: 1rem;
`;

export const CardImg = styled.img`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  cursor: pointer;
  height: 265px;
`;

export const CardSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;

export const CardTitle = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const CardDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textColor};
  height: 90px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.textColor};
  padding: 0.5rem 0;
`;

export const CardFooterIcon = styled.a`
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const CardFooterLink = styled.a`
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