import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 90;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.9);
  max-width: 380px;
  height: 540px;
  padding: 1rem;
  border-radius: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.iconColor};
`;

export const ModalText = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.buttonText};
  margin: 0;
  margin-top: 2rem;
  font-size: 1.2rem;

  span {
    width: 90%;
  }
`;

export const ModalSubContainer = styled.div`
`;