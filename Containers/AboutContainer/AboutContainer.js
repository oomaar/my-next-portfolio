import { About } from "../../components";
import { Headtag, Main } from "../../global";
import portfolioData from "../../data/portfolioData.json";
import {
    Container,
} from "./styledAboutContainer";

export const AboutContainer = () => {
    return (
        <Container>
            <Headtag title="Omar's Portfolio | About Me" />

            <Main>
                <About data={portfolioData.about} />
            </Main>
        </Container>
    );
};