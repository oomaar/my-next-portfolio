import styled from 'styled-components';
import { mdScreen, xlScreen, lgScreen } from '../../global';
import { tansition_04 } from '../../global/styles/GlobalStyle';

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2rem;

  @media screen and (max-width: ${xlScreen}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${lgScreen}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${mdScreen}) {
    grid-template-columns: repeat(1, 1fr);
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

// Single Card
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColor};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 275px;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  align-self: center;
  margin-top: 1rem;
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.colors.imageShadow};
  height: 150px;
  width: 150px;
`;

export const CardImg = styled.img`
  border-radius: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardSubContainer = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  text-align: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const CardTools = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`;

export const CardTool = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardToolImg = styled.img`
  width: 40px;
`;

export const CardFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.textColor};
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardFooterLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.h3FontSize};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.linkColor};
  border: 0;
  outline: 0;
  border-radius: 1rem;
  transition: ${tansition_04};
`;