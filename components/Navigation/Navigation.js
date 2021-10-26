import { Container, Section } from "../../global";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { DiGitMerge } from "react-icons/di";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { discoverVariants } from "../../animations";
import NextLink from "next/link";
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
                <NavContainer>
                    <motion.div
                        variants={discoverVariants}
                        whileHover="hover"
                    >
                        <NextLink href="/about">
                            <LinkContainer>
                                <Link target="_blank">About Me</Link>
                                <IconContainer>
                                    <FcAbout />
                                </IconContainer>
                            </LinkContainer>
                        </NextLink>
                    </motion.div>

                    <motion.div
                        variants={discoverVariants}
                        whileHover="hover"
                    >
                        <NextLink href="/work">
                            <LinkContainer>
                                <Link target="_blank">My Works</Link>
                                <IconContainer>
                                    <DiGitMerge />
                                </IconContainer>
                            </LinkContainer>
                        </NextLink>
                    </motion.div>

                    <motion.div
                        variants={discoverVariants}
                        whileHover="hover"
                    >
                        <NextLink href="/contact">
                            <LinkContainer>
                                <Link target="_blank">Contact Me</Link>
                                <IconContainer>
                                    <FiSend />
                                </IconContainer>
                            </LinkContainer>
                        </NextLink>
                    </motion.div>

                    <motion.div
                        variants={discoverVariants}
                        whileHover="hover"
                    >
                        <NextLink href="/skills">
                            <LinkContainer>
                                <Link target="_blank">My Skills</Link>
                                <IconContainer>
                                    <GiSkills />
                                </IconContainer>
                            </LinkContainer>
                        </NextLink>
                    </motion.div>
                </NavContainer>
            </Container>
        </Section>
    );
};