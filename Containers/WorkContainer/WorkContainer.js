import { Headtag, Main } from "../../global";
import { Work } from "../../components";
import portfolioData from "../../data/portfolioData.json";
import {
    Container,
} from "./styledWorkContainer";

export const WorkContainer = () => {
    return (
        <Container>
            <Headtag title="Omar's Portfolio | Works" />

            {/* <Main> */}
            <Work data={portfolioData.portfolio} />
            {/* </Main> */}
        </Container>
    );
};