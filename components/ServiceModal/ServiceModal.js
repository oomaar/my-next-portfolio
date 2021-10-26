import { AiFillCheckCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import { backDropVariants, modalVariants } from "../../animations";
import {
    Modal,
    ModalContainer,
    CloseIcon,
    ModalText,
} from "./styledServiceModal";

export const ServiceModal = ({ handleCloseModal, modal, data }) => {
    const frontEndData = data.front.map(service => (
        <ModalText key={service.id}>
            <AiFillCheckCircle />
            <span>
                {service.service}
            </span>
        </ModalText>
    ));

    const backEndData = data.back.map(service => (
        <ModalText key={service.id}>
            <AiFillCheckCircle />
            <span>
                {service.service}
            </span>
        </ModalText>
    ));

    const designData = data.design.map(service => (
        <ModalText key={service.id}>
            <AiFillCheckCircle />
            <span>
                {service.service}
            </span>
        </ModalText>
    ));

    return (
        <div>
            <motion.div
                variants={backDropVariants}
                initial="hidden"
                animate="visable"
                exit="exit"
            >
                <Modal>
                    <motion.div variants={modalVariants}>
                        <ModalContainer>
                            <CloseIcon>
                                <ImCross onClick={() => handleCloseModal()} />
                            </CloseIcon>
                            <div>
                                {modal === "front" ? (
                                    frontEndData
                                ) : modal === "back" ? (
                                    backEndData
                                ) : modal === "design" ? (
                                    designData
                                ) : <></>}
                            </div>
                        </ModalContainer>
                    </motion.div>
                </Modal>
            </motion.div>
        </div>
    );
};