import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { Container, Section } from "../../global";
import { motion } from "framer-motion";
import {
    ProjectContainer,
    ProjectFeature,
    Title,
    Text,
    Button,
    ImageContainer,
} from "./styledProjectMind";
import { projectMindVariants } from "../../animations";

export const ProjectMind = () => {
    return (
        <Section>
            <Container>
                <ProjectContainer>
                    <ProjectFeature>
                        <Title>You have a new project !</Title>
                        <Text>Let's do it! Contact me Now</Text>
                        <motion.div
                            variants={projectMindVariants}
                            whileHover="hover"
                        >
                            <Button><FiSend />Contact Me</Button>
                        </motion.div>
                    </ProjectFeature>
                    <ImageContainer>
                        <Image
                            src="/project.png"
                            width={400}
                            height={400}
                            objectFit="contain"
                        />
                    </ImageContainer>
                </ProjectContainer>
            </Container>
        </Section>
    );
};