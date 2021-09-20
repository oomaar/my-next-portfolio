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
    SocialLink,
} from "./styledHeader";

export const Header = () => {
    const array = ['Work', 'About', 'Education', 'Contact'];
    const links = array.map((link, i) => (
        <li key={i}>
            <Link>{link}</Link>
        </li>
    ));

    let ball = document.getElementsByClassName("ball");

    document.onmousemove = function () {
        let x = event.clientX * 100 / window.innerWidth + "%";
        let y = event.clientY * 100 / window.innerHeight + "%";

        for (var i = 0; i < 1; i++) {
            ball[i].style.left = x;
            ball[i].style.top = y;
            ball[i].style.transform = "translate(-" + x + ", -" + y + ")";
        };
    };

    return (
        <HeaderTag>
            <LinksList>
                {links}
            </LinksList>
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
            <SocialBox>
                <SocialLink>Github</SocialLink>
                <SocialLink>Whatsapp</SocialLink>
            </SocialBox>

        </HeaderTag>
    );
};