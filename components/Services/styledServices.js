import styled from 'styled-components';

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bodyColor};
  border-radius: 1rem;
  gap: 1rem;
  padding: 1rem;
  max-width: 300px;
  width: 100%;

  :nth-child(1) {
    align-self: flex-start;
  }

  :nth-child(2) {
    align-self: center;
  }

  :nth-child(3) {
    align-self: flex-end;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ServicesTitle = styled.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const Icon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.iconColor};
  transition: all 0.3s ease-in;
`;

export const ViewLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.iconColor};
  transition: all 0.3s ease-in;

  :hover ${Icon} {
    transform: translateX(10px);
  }
`;