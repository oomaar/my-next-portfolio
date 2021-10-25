import { Container, Section, Title } from "../../global";
import { FcAbout } from "react-icons/fc";
import { DiGitMerge } from "react-icons/di";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { discoverVariants } from "../../animations";
import {
    NavContainer,
    LinkContainer,
    Link,
    IconContainer,
} from "./styledNavigation";

export const Navigation = () => {
    return (
        <Section>
            <Container>
                <Title>Discover</Title>

                <NavContainer>
                    <motion.div
                        variants={discoverVariants}
                        whileHover="hover"
                    >
                        <LinkContainer>
                            <Link href="/about">About Me</Link>
                            <IconContainer>
                                <FcAbout />
                            </IconContainer>
                        </LinkContainer>
                    </motion.div>

                    <motion.div
                        variants={discoverVariants}
                        whileHover="hover"
                    >
                        <LinkContainer>
                            <Link href="/work">My Works</Link>
                            <IconContainer>
                                <DiGitMerge />
                            </IconContainer>
                        </LinkContainer>
                    </motion.div>

                    <motion.div
                        variants={discoverVariants}
                        whileHover="hover"
                    >
                        <LinkContainer>
                            <Link href="/contact">Contact Me</Link>
                            <IconContainer>
                                <FiSend />
                            </IconContainer>
                        </LinkContainer>
                    </motion.div>

                    <motion.div
                        variants={discoverVariants}
                        whileHover="hover"
                    >
                        <LinkContainer>
                            <Link href="#">Know</Link>
                            <IconContainer>
                                <DiGitMerge />
                            </IconContainer>
                        </LinkContainer>
                    </motion.div>
                </NavContainer>
            </Container>
        </Section>
    );
};