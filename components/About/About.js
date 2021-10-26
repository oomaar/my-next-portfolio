import { useSelector } from "react-redux";
import { Container, Section, Title } from "../../global";
import { darkValue } from "../../redux/slices/darkSlice";
import { BriefHistory } from "..";
import {
    AboutContainer,
    AboutSubContainer,
    ImageContainer,
    BioContainer,
    AboutImage,
    AboutBio,
    AboutButton,
} from "./styledAbout";

export const About = ({ data }) => {
    const darkThemeState = useSelector(darkValue);
    const historyData = data.history;

    return (
        <div>
            <Section id="about">
                <Container>
                    <Title>About Me</Title>

                    <AboutContainer>
                        <AboutSubContainer>
                            <ImageContainer>
                                <AboutImage src={`${darkThemeState === "light" ? '/about-light' : '/about'}.jpg`} />
                            </ImageContainer>
                            <BioContainer>
                                <AboutBio>{data.bio}</AboutBio>
                                <AboutButton>Download CV</AboutButton>
                            </BioContainer>
                        </AboutSubContainer>
                    </AboutContainer>
                </Container>
            </Section>
            <BriefHistory data={historyData} />
        </div>
    );
};

