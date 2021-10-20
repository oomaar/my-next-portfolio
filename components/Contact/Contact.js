import { Container, Section, Title } from "../../global";
import {
    ContactContainer,
} from "./styledContact";

export const Contact = ({ data }) => {
    return (
        <Section id="contact">
            <Container>
                <Title>Contact Me</Title>

                <ContactContainer>
                    Contact Container
                </ContactContainer>
            </Container>
        </Section>
    );
};