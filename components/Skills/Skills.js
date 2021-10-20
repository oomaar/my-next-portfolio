import { useSelector } from "react-redux";
import { Container, Section, Title } from "../../global";
import { darkValue } from "../../redux/slices/darkSlice";
import {
    SkillsContainer,
    SkillTitle,
    SkillImageContainer,
    SkillImage,
} from "./styledSkills";

export const Skills = ({ data }) => {
    const darkStateValue = useSelector(darkValue);

    const skillsArray = data.map(skill => (
        <div key={skill.id}>
            <SkillImageContainer>
                {(skill.title === "Node-JS" && darkStateValue === "dark") ? (
                    <SkillImage src={skill.imageWhite} />
                ) : (skill.title === "Next-JS" && darkStateValue === "dark") ? (
                    <SkillImage src={skill.imageWhite} />
                ) : (
                    <SkillImage src={skill.image} />
                )}
            </SkillImageContainer>
            <SkillTitle>{skill.title}</SkillTitle>
        </div>
    ));

    return (
        <Section id="skills">
            <Container>
                <Title>Skills</Title>

                <SkillsContainer>
                    {skillsArray}
                </SkillsContainer>
            </Container>
        </Section>
    );
};