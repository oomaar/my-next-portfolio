import styled from 'styled-components';
import { lgScreen } from '../../global';

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 1rem 0;
  width: 100%;

  @media screen and (max-width: 1300px) {
    gap: 1rem;
  }

  @media screen and (max-width: ${lgScreen}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }
`;

export const LinkContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bodyColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
  max-width: 280px;
  width: 100%;
  margin: 1rem auto;
`;

export const Link = styled.a`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const IconContainer = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.iconColor};
`;