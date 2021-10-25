import { Container, Section, Title } from "../../global";
import { RiBracesFill } from "react-icons/ri";
import { BsServer } from "react-icons/bs";
import { CgDesignmodo } from "react-icons/cg";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useState } from "react";
import { ServiceModal } from "..";
import {
    ServicesContainer,
    SubContainer,
    TitleContainer,
    ServicesTitle,
    Icon,
    ViewLink,
} from "./styledServices";

export const Services = ({ data }) => {
    const modalData = data.modals;
    const [showModal, setShowModal] = useState(false);
    const [modal, setModal] = useState("");

    const handleModal = skill => {
        setShowModal(true);
        setModal(skill);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModal("");
    };

    return (
        <Section>
            <Container>
                <Title>Services</Title>
                {showModal && (
                    <ServiceModal
                        handleCloseModal={handleCloseModal}
                        modal={modal}
                        data={modalData}
                    />
                )}
                <ServicesContainer>
                    <SubContainer>
                        <TitleContainer>
                            <Icon>
                                <RiBracesFill />
                            </Icon>
                            <ServicesTitle>Front-End</ServicesTitle>
                        </TitleContainer>
                        <ViewLink onClick={() => handleModal("front")}>
                            <span>View More</span>
                            <Icon>
                                <HiOutlineArrowRight />
                            </Icon>
                        </ViewLink>
                    </SubContainer>

                    <SubContainer>
                        <TitleContainer>
                            <Icon>
                                <BsServer />
                            </Icon>
                            <ServicesTitle>Back-End</ServicesTitle>
                        </TitleContainer>
                        <ViewLink onClick={() => handleModal("back")}>
                            <span>View More</span>
                            <Icon>
                                <HiOutlineArrowRight />
                            </Icon>
                        </ViewLink>
                    </SubContainer>

                    <SubContainer>
                        <TitleContainer>
                            <Icon>
                                <CgDesignmodo />
                            </Icon>
                            <ServicesTitle>Design</ServicesTitle>
                        </TitleContainer>
                        <ViewLink onClick={() => handleModal("design")}>
                            <span>View More</span>
                            <Icon>
                                <HiOutlineArrowRight />
                            </Icon>
                        </ViewLink>
                    </SubContainer>
                </ServicesContainer>
            </Container>
        </Section>
    );
};