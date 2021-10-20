import { Container, Section, Title } from "../../global";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import {
    Navigation,
    NavLinks,
    CardsContainer,
    Card,
    CardImg,
    CardSubContainer,
    CardTitle,
    CardDescription,
    CardFooter,
    CardFooterIcon,
    CardFooterLink,
} from "./styledWork";

export const Work = ({ data }) => {
    const [category, setCategory] = useState("all");

    const clonesArray = data.clones.map(clone => (
        <Card key={clone.id}>
            <CardImg src={clone.image} />
            <CardTitle>{clone.title}</CardTitle>
            <CardSubContainer>
                <CardDescription>{clone.description}</CardDescription>
                <CardFooter>
                    <CardFooterIcon href="#">
                        <FaGithub />
                    </CardFooterIcon>
                    <CardFooterLink href={clone.url}>Live Preview</CardFooterLink>
                </CardFooter>
            </CardSubContainer>
        </Card>
    ));

    const schoolArray = data.school.map(school => (
        <Card key={school.id}>
            <CardImg src={school.image} />
            <CardTitle>{school.title}</CardTitle>
            <CardSubContainer>
                <CardDescription>{school.description}</CardDescription>
                <CardFooter>
                    <CardFooterIcon href="#">
                        <FaGithub />
                    </CardFooterIcon>
                    <CardFooterLink href={school.url}>Live Preview</CardFooterLink>
                </CardFooter>
            </CardSubContainer>
        </Card>
    ));

    const freeLanceArray = data.freeLance.map(free => (
        <Card key={free.id}>
            <CardImg src={free.image} />
            <CardTitle>{free.title}</CardTitle>
            <CardSubContainer>
                <CardDescription>{free.description}</CardDescription>
                <CardFooter>
                    <CardFooterIcon href="#">
                        <FaGithub />
                    </CardFooterIcon>
                    <CardFooterLink href={free.url}>Live Preview</CardFooterLink>
                </CardFooter>
            </CardSubContainer>
        </Card>
    ));

    return (
        <Section id="work">
            <Container>
                <Title>Works</Title>

                <Navigation>
                    <NavLinks
                        onClick={() => setCategory("all")}
                    >
                        All
                    </NavLinks>
                    <NavLinks
                        onClick={() => setCategory("clones")}
                    >
                        Clones
                    </NavLinks>
                    <NavLinks
                        onClick={() => setCategory("school")}
                    >
                        School
                    </NavLinks>
                    <NavLinks
                        onClick={() => setCategory("free")}
                    >
                        Freelance
                    </NavLinks>
                </Navigation>

                <CardsContainer>
                    {category === "all" && (
                        <>
                            {clonesArray}
                            {schoolArray}
                            {freeLanceArray}
                        </>
                    )}
                    {category === "clones" && clonesArray}
                    {category === "school" && schoolArray}
                    {category === "free" && freeLanceArray}
                </CardsContainer>
            </Container>
        </Section>
    );
};