import { Headtag, Main } from "../../global";
import { About, Contact, Hero, Skills } from "../../components";
import portfolioData from "../../data/portfolioData.json";
import {
    Container,
} from "./styledHomeContainer";

export const HomeContainer = () => {
    return (
        <Container>
            <Headtag title="Omar's Portfolio | Resume" />

            <Main>
                <Hero data={portfolioData.hero} />
                {/* <About data={portfolioData.about} /> */}
                {/* <Skills data={portfolioData.skills} /> */}
                {/* <Contact data={portfolioData.contact} /> */}
            </Main>
        </Container>
    );
};