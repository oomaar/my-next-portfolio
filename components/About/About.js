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
                                <AboutBio>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, optio.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, at!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tenetur.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, maxime.
                                </AboutBio>
                                <AboutButton>Download CV</AboutButton>
                            </BioContainer>
                        </AboutSubContainer>
                    </AboutContainer>
                </Container>
            </Section>
            <BriefHistory />
        </div>
    );
};

