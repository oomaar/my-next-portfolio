import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import portfolioData from "../../data/portfolioData.json";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { darkValue, setDarkMode } from "../../redux/slices/darkSlice";
import {
    HeaderTag,
    LinksList,
    Link,
    EyeContainer,
    Eye,
    Ball,
    Lashes,
    Lash,
    SocialBox,
} from "./styledHeader";

export const Header = () => {
    const dispatch = useDispatch();
    const darkConst = useSelector(darkValue);

    const links = portfolioData.header.links.map(link => (
        <li key={link.id}>
            <Link>{link.title}</Link>
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
            <EyeContainer>
                <Lashes>
                    <Lash darkConst={darkConst} className="lash__1"></Lash>
                    <Lash darkConst={darkConst} className="lash__2"></Lash>
                    <Lash darkConst={darkConst} className="lash__3"></Lash>
                </Lashes>
                <Eye darkConst={darkConst}>
                    <Ball className="ball"></Ball>
                </Eye>
            </EyeContainer>
            <SocialBox>
                <a>
                    <FaGithub />
                </a>
                <a>
                    <FaWhatsapp />
                </a>
                <a>
                    {darkConst === "light" ? <BsMoon onClick={() => handleDark()} /> : <BiSun onClick={() => handleLight()} />}
                </a>
            </SocialBox>

        </HeaderTag>
    );
};