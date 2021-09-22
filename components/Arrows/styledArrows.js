import styled from "styled-components";
import { mdScreen, xlScreen } from "../../global";

export const Container = styled.div`
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    display: flex;
    z-index: 100;

    @media screen and (max-width: ${xlScreen}) {
      top: 40%;
    }

    @media screen and (max-width: ${mdScreen}) {
      top: 45%;
    }
`;

export const Arrow = styled.span`
    cursor: pointer;
    border: 0;
    z-index: 100;
    width: auto;
    padding: 1rem;
    font-size: clamp(26px, 10vw, 40px);
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    transition: 0.5s ease-in-out;
    color: ${({ theme }) => theme.colors.firstColor};

    &:hover {
        color: rgba(255, 255, 255, 0.7);
    }

    &.prev {
        margin-right: auto;
    }
    
    &.next {
        margin-left: auto;
    }
`;