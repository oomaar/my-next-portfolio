import { Container, Section, Title } from "../../global";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import {
    ContactContainer,
    ContactCard,
    ContactTitle,
    ContactIcon,
    ContactText,
} from "./styledContact";

export const Contact = ({ data }) => {
    return (
        <Section id="contact">
            <Container>
                <Title>Contact Me</Title>

                <ContactContainer>
                    <ContactCard>
                        <ContactIcon>
                            <FaFacebookMessenger />
                        </ContactIcon>
                        <ContactTitle>Message</ContactTitle>
                        <ContactText>Facebook Messanger</ContactText>
                    </ContactCard>
                    <ContactCard>
                        <ContactIcon>
                            <IoLogoWhatsapp />
                        </ContactIcon>
                        <ContactTitle>Chat</ContactTitle>
                        <ContactText>Whatsapp: (+02)-011-4012-5555</ContactText>
                    </ContactCard>
                    <ContactCard>
                        <ContactIcon>
                            <MdEmail />
                        </ContactIcon>
                        <ContactTitle>Email</ContactTitle>
                        <ContactText>omaar_5@hotmail.com</ContactText>
                    </ContactCard>
                    <ContactCard>
                        <ContactIcon>
                            <AiFillPhone />
                        </ContactIcon>
                        <ContactTitle>Call</ContactTitle>
                        <ContactText>(+02)-011-4012-5555</ContactText>
                    </ContactCard>

                </ContactContainer>
            </Container>
        </Section>
    );
};