import { SiGmail, SiWhatsapp } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { RiMessengerLine, RiLinkedinLine, RiTwitterLine, RiFacebookLine } from "react-icons/ri";
import {
    FooterContainer,
    SubContainer,
    Info,
    Title,
    SubTitle,
    Icons,
    Copy,
} from "./styledFooter";
import { Icon } from "../../global";

export const Footer = () => {
    return (
        <FooterContainer>
            <SubContainer>
                <Info>
                    <Title>Omar Hassan</Title>
                    <SubTitle>Programmer, Web Developer</SubTitle>
                </Info>

                <Icons>
                    <Icon>
                        <FiGithub />
                    </Icon>
                    <Icon>
                        <RiFacebookLine />
                    </Icon>
                    <Icon>
                        <RiMessengerLine />
                    </Icon>
                    <Icon>
                        <GrInstagram />
                    </Icon>
                    <Icon>
                        <RiLinkedinLine />
                    </Icon>
                    <Icon>
                        <RiTwitterLine />
                    </Icon>
                    <Icon>
                        <SiGmail />
                    </Icon>
                    <Icon>
                        <SiWhatsapp />
                        {/* <FaWhatsapp /> */}
                    </Icon>
                </Icons>
            </SubContainer>
            <Copy>
                &#169; <span>Omar's</span> Portfolio | Powered by NextJS
            </Copy>
        </FooterContainer>
    );
};