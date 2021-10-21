import { Title } from "../../global";
import { useState } from "react";
import {
    WorkContainer,
    Navigation,
    NavLinks,
    CardsContainer,
    Card,
    ImgContainer,
    CardImg,
    CardSubContainer,
    CardTitle,
    CardFooter,
    CardFooterLink,
    CardTools,
    CardTool,
    CardToolImg,
} from "./styledWork";

export const Work = ({ data }) => {
    const [category, setCategory] = useState("all");

    const clonesArray = data.clones.map(clone => (
        <Card key={clone.id}>
            <CardSubContainer>
                <ImgContainer>
                    <CardImg src={clone.image} />
                </ImgContainer>
                <CardTitle>{clone.title}</CardTitle>
            </CardSubContainer>
            <CardSubContainer>
                <CardTools>
                    {clone.tools.map(tool => (
                        <CardTool key={tool.id}>
                            <CardToolImg src={tool.icon} />
                        </CardTool>
                    ))}
                </CardTools>
                <CardFooter>
                    <CardFooterLink href={clone.url} target="_blank">Live Preview</CardFooterLink>
                    <CardFooterLink href={clone.url} target="_blank">Read More</CardFooterLink>
                </CardFooter>
            </CardSubContainer>
        </Card>
    ));

    const schoolArray = data.school.map(school => (
        <Card key={school.id}>
            <CardSubContainer>
                <ImgContainer>
                    <CardImg src={school.image} />
                </ImgContainer>
                <CardTitle>{school.title}</CardTitle>
            </CardSubContainer>
            <CardSubContainer>
                <CardTools>
                    {school.tools.map(tool => (
                        <CardTool key={tool.id}>
                            <CardToolImg src={tool.icon} />
                        </CardTool>
                    ))}
                </CardTools>
                <CardFooter>
                    <CardFooterLink href={school.url} target="_blank">Live Preview</CardFooterLink>
                    <CardFooterLink href={school.url} target="_blank">Read More</CardFooterLink>
                </CardFooter>
            </CardSubContainer>
        </Card>
    ));

    const freeLanceArray = data.freeLance.map(free => (
        <Card key={free.id}>
            <CardSubContainer>
                <ImgContainer>
                    <CardImg src={free.image} />
                </ImgContainer>
                <CardTitle>{free.title}</CardTitle>
            </CardSubContainer>
            <CardSubContainer>
                <CardTools>
                    {free.tools.map(tool => (
                        <CardTool key={tool.id}>
                            <CardToolImg src={tool.icon} />
                        </CardTool>
                    ))}
                </CardTools>
                <CardFooter>
                    <CardFooterLink href={free.url} target="_blank">Live Preview</CardFooterLink>
                    <CardFooterLink href={free.url} target="_blank">Read More</CardFooterLink>
                </CardFooter>
            </CardSubContainer>
        </Card>
    ));

    return (
        <WorkContainer>
            <Title>Works</Title>

            <Navigation>
                <NavLinks onClick={() => setCategory("all")}>
                    All
                </NavLinks>
                <NavLinks onClick={() => setCategory("clones")}>
                    Clones
                </NavLinks>
                <NavLinks onClick={() => setCategory("school")}>
                    School
                </NavLinks>
                <NavLinks onClick={() => setCategory("free")}>
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
        </WorkContainer>
    );
};