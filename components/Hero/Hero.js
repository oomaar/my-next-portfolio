import { BigEye } from "..";
import {
    HeroContainer,
    TextContainer,
    Title,
    Subtitle
} from "./styledHero";

export const Hero = ({ data }) => {
    return (
        <HeroContainer>
            <TextContainer>
                <Title>Hi. I'm {data.firstName} <br /> A Programmer.</Title>
                <Subtitle>{data.subTitle}</Subtitle>
            </TextContainer>
            <BigEye />
        </HeroContainer>
    );
};