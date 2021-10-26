import { Container, Section, Title } from "../../global";
import { RiCalendarTodoFill } from "react-icons/ri";
import {
    HistoryContainer,
} from "./styledBriefHistory";

export const BriefHistory = () => {
    return (
        <Section>
            <Container>
                <Title>A brief history</Title>

                <HistoryContainer>
                    Brief History Component
                </HistoryContainer>
            </Container>
        </Section>
    );
};