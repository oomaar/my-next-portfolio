import styled from 'styled-components';
import { lgScreen, mdScreen, xlScreen } from '../../global';

export const SkillsContainer = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(6, 1fr);

  @media screen and (max-width: 1100px) {
    gap: 3rem;
  }

  @media screen and (max-width: ${xlScreen}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: ${lgScreen}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${mdScreen}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillTitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const SkillImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillImage = styled.img`
  width: 100px;
`;