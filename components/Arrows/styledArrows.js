import styled from "styled-components";
import { mdScreen, smScreen, xlScreen } from "../../global";

export const Container = styled.div`
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 80%;
    display: flex;
    z-index: 100;
    pointer-events: none;

    @media screen and (max-width: 1450px) {
      width: 90%;
    }

    @media screen and (max-width: 1300px) {
        width: 100%;
    }

    @media screen and (max-width: ${xlScreen}) {
      top: 40%;
    }
`;

export const Arrow = styled.span`
    cursor: pointer;
    border: 0;
    z-index: 100;
    width: auto;
    padding: 1rem;
    font-size: clamp(36px, 15vw, 50px);
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    transition: 0.5s ease-in-out;
    color: #edca85;
    pointer-events: fill;

    &:hover {
        color: #e58cb7;
    }

    &.prev {
        margin-right: auto;
    }
    
    &.next {
        margin-left: auto;
    }
`;