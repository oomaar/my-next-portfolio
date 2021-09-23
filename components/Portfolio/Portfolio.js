import { useState } from "react";
import { Arrows } from "..";
import {
    Container,
    PortfolioContainer,
    Title,
    SubTitle,
    Carousel,
    Slide,
    Image,
    CarouselData,
    CarouselTitle,
    CarouselSubTitle,
    CarouselButton,
} from "./styledPortfolio";

export const Portfolio = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const len = data.clones.length - 1;
    const schoolLen = data.school.length - 1;

    const clones = data.clones.map((clone, i) => (
        <Slide key={i} className={i === activeIndex ? "active" : ""}>
            <a href={clone.url} target="_blank">
                <Image src={clone.image} />
            </a>
            <CarouselData>
                <CarouselTitle>{clone.title}</CarouselTitle>
                <CarouselSubTitle>
                    {clone.description}
                </CarouselSubTitle>
                <CarouselButton href={clone.url} target="_blank">Demo</CarouselButton>
            </CarouselData>
        </Slide>
    ));

    const school = data.school.map((school, i) => (
        <Slide key={i} className={i === activeIndex ? "active" : ""}>
            <a href={school.url} target="_blank">
                <Image src={school.image} />
            </a>
            <CarouselData>
                <CarouselTitle>{school.title}</CarouselTitle>
                <CarouselSubTitle>
                    {school.description}
                </CarouselSubTitle>
                <CarouselButton href={school.url} target="_blank">Demo</CarouselButton>
            </CarouselData>
        </Slide>
    ))

    return (
        <PortfolioContainer>
            <Title>Portfolio</Title>

            <Container>
                <SubTitle>Clones</SubTitle>

                <Carousel>
                    {clones}
                    <Arrows
                        prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                        nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
                    />
                </Carousel>
            </Container>
            <Container>
                <SubTitle>School</SubTitle>

                <Carousel>
                    {school}
                    <Arrows
                        prevSlide={() => setActiveIndex(activeIndex < 1 ? schoolLen : activeIndex - 1)}
                        nextSlide={() => setActiveIndex(activeIndex === schoolLen ? 0 : activeIndex + 1)}
                    />
                </Carousel>
            </Container>
        </PortfolioContainer>
    );
};