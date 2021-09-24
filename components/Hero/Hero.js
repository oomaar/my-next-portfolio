import {
    HeroContainer,
    TextContainer,
    Title,
    Subtitle,
    BigEyeContainer,
    Box1,
    Box2,
    BoxCenter,
    Lashes,
    Lash1,
    Lash2,
    Lash3,
    Eye,
    Iris,
    Box3,
    Box4,
    Box5,
} from "./styledHero";

export const Hero = ({ data }) => {
    return (
        <HeroContainer>
            <TextContainer>
                <Title>Hi. I'm {data.firstName} <br /> A Programmer.</Title>
                <Subtitle>{data.subTitle}</Subtitle>
            </TextContainer>
            <BigEyeContainer>
                <Box1></Box1>
                <Box2></Box2>
                <BoxCenter>
                    <Eye>
                        <Lashes>
                            <Lash1></Lash1>
                            <Lash2></Lash2>
                            <Lash3></Lash3>
                        </Lashes>
                        <Iris></Iris>
                    </Eye>
                </BoxCenter>
                <Box3></Box3>
                <Box4></Box4>
                <Box5></Box5>
            </BigEyeContainer>
        </HeroContainer>
    );
};