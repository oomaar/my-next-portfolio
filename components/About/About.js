import { useSelector } from "react-redux";
import { Container, Section, Title } from "../../global";
import { darkValue } from "../../redux/slices/darkSlice";
import { RiCalendarTodoFill } from "react-icons/ri";
import {
    AboutContainer,
    AboutSubContainer,
    ImageContainer,
    BioContainer,
    AboutImage,
    AboutBio,
    AboutButton,
    AboutHistory,
    HistoryTitle,
    HistroryContainer,
    HistoryCard,
} from "./styledAbout";

export const About = ({ data }) => {
    const darkThemeState = useSelector(darkValue);

    return (
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

                    <AboutHistory>
                        <HistoryTitle>A brief history</HistoryTitle>

                        <HistroryContainer>
                            <HistoryCard>
                                <h3>Degree</h3>
                                <p>Bachelor Degree / Computer Science</p>
                                <p>Future University in Egypt (FUE)</p>
                                <h6>
                                    <RiCalendarTodoFill />
                                    SEP:2012 - FEB:2018
                                </h6>
                            </HistoryCard>
                            <HistoryCard>
                                <h3>Military Service</h3>
                                <p>Completed Military Service</p>
                                <h6>
                                    <RiCalendarTodoFill />
                                    OCT:2018 - DEC:2019
                                </h6>
                            </HistoryCard>
                            <HistoryCard>
                                <h3>Self Learning</h3>
                                <p>Web Development</p>
                                <h6>
                                    <RiCalendarTodoFill />
                                    DEC:2019 - JAN:2021
                                </h6>
                            </HistoryCard>
                            <HistoryCard>
                                <h3>Bootcamp</h3>
                                <p>The Complete Web Development Bootcamp</p>
                                <p>App Brewery</p>
                                <h6>
                                    <RiCalendarTodoFill />
                                    JAN:2021 - JUN:2021
                                </h6>
                            </HistoryCard>
                            <HistoryCard>
                                <h3>FreeLancing</h3>
                                <p>As a Programmer</p>
                                <h6>
                                    <RiCalendarTodoFill />
                                    JUL:2021 - PRESENT
                                </h6>
                            </HistoryCard>
                        </HistroryContainer>
                    </AboutHistory>
                </AboutContainer>
            </Container>
        </Section>
    );
};

