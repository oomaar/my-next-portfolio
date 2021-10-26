import { Container, Section, Title } from "../../global";
import { RiCalendarTodoFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { discoverVariants } from "../../animations";
import {
    HistoryContainer,
    HistoryCard,
} from "./styledBriefHistory";

export const BriefHistory = ({ data }) => {
    const historyData = data.map(history => (
        <HistoryCard key={history.id}>
            <motion.div
                variants={discoverVariants}
                whileHover="hover"
            >
                <h3>{history.title}</h3>
                <p>{history.subTitle}</p>
                <p>{history.location}</p>
                <h6>
                    <RiCalendarTodoFill />
                    {history.date}
                </h6>
            </motion.div>
        </HistoryCard>
    ));

    return (
        <Section>
            <Container>
                <Title>A brief history</Title>

                <HistoryContainer>
                    {historyData}
                </HistoryContainer>
            </Container>
        </Section>
    );
};