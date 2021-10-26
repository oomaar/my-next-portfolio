import { Headtag, Main } from "../../global";
import { Hero, Navigation } from "../../components";
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
                <Navigation />
            </Main>
        </Container>
    );
};