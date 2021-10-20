import { Container, Section, Title } from "../../global";
import {
    SkillsContainer,
} from "./styledSkills";

export const Skills = ({ data }) => {
    return (
        <Section id="skills">
            <Container>
                <Title>Skills</Title>

                <SkillsContainer>
                    Skills container
                </SkillsContainer>
            </Container>
        </Section>
    );
};