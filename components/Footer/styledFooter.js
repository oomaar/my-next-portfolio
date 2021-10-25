import styled from 'styled-components';
import { mdScreen, xlScreen } from '../../global';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${xlScreen}) {
    padding: 0 0.5rem;
  }

  @media screen and (max-width: ${mdScreen}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Info = styled.div`
  @media screen and (max-width: ${mdScreen}) {
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.h1FontSize};
  color: ${({ theme }) => theme.colors.titleColor};
  margin: 1rem 0;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fontSize.normalFontSize};
`;

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 1rem 0;
`;

export const Copy = styled.h6`
  font-size: ${({ theme }) => theme.fontSize.smallFontSize};
  color: ${({ theme }) => theme.colors.textColor};

  span {
    color: ${({ theme }) => theme.colors.linkColor};
    cursor: pointer;
  }
`;
