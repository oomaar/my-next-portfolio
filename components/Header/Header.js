import { FiGithub } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import portfolioData from "../../data/portfolioData.json";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { darkValue, setDarkMode } from "../../redux/slices/darkSlice";
import NextLink from "next/link";
import {
    HeaderTag,
    LinksList,
    Link,
    TheEye,
    EyeContainer,
    Eye,
    Ball,
    Lashes,
    Lash,
    Icons,
} from "./styledHeader";
import { Icon } from "../../global";

export const Header = () => {
    const dispatch = useDispatch();
    const darkConst = useSelector(darkValue);

    const links = portfolioData.header.links.map(link => (
        <li key={link.id}>
            <NextLink href={link.href}>
                <Link>{link.title}</Link>
            </NextLink>
        </li>
    ));

    let ball = document.getElementsByClassName("ball");

    document.onmousemove = () => {
        let x = event.clientX * 100 / window.innerWidth + "%";
        let y = event.clientY * 100 / window.innerHeight + "%";

        for (var i = 0; i < 1; i++) {
            ball[i].style.left = x;
            ball[i].style.top = y;
            ball[i].style.transform = "translate(-" + x + ", -" + y + ")";
        };
    };

    const handleLight = () => dispatch(setDarkMode("light"));
    const handleDark = () => dispatch(setDarkMode("dark"));

    return (
        <HeaderTag>
            <LinksList>
                {links}
            </LinksList>
            <NextLink href="/">
                <TheEye>
                    <EyeContainer>
                        <Lashes>
                            <Lash className="lash__1"></Lash>
                            <Lash className="lash__2"></Lash>
                            <Lash className="lash__3"></Lash>
                        </Lashes>
                        <Eye>
                            <Ball className="ball"></Ball>
                        </Eye>
                    </EyeContainer>
                </TheEye>
            </NextLink>
            <Icons>
                <Icon>
                    <FiGithub />
                </Icon>
                <Icon>
                    <SiWhatsapp />
                </Icon>
                <Icon>
                    {darkConst === "light" ? <BsMoon onClick={() => handleDark()} /> : <BiSun onClick={() => handleLight()} />}
                </Icon>
            </Icons>

        </HeaderTag>
    );
};