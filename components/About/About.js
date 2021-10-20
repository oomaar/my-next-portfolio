import { Container, Section, Title } from "../../global";
import {
    AboutContainer,
} from "./styledAbout";

export const About = ({ data }) => {
    return (
        <Section id="about">
            <Container>
                <Title>About Me</Title>

                <AboutContainer>
                    About Container
                </AboutContainer>
            </Container>
        </Section>
    );
};