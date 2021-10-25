import styled from 'styled-components';
import { lgScreen, mdScreen, xlScreen } from '../../global';

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${lgScreen}) {
    flex-direction: column;
  }
`;

export const ProjectFeature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: clamp(1.2rem, 3vw, 1.7rem);
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const Text = styled.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.buttonColor};
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.6rem 1rem;
  transition: all 0.5s ease-in;
  border: 0;
  outline: 0;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  @media screen and (max-width: ${xlScreen}) {
    width: 300px;
  }

  @media screen and (max-width: ${mdScreen}) {
    width: 270px;
  }
`;