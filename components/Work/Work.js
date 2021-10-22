import { useState } from "react";
import {
    CarouselContainer,

    Slider,
    SubContainer,
    Slide,
    SlideImage,
    CarouselFeature,
    Title,
    SubTitle,

    Dots,
    Dot,
    Arrows,
    Arrow,
} from "./styledWork";

export const Work = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(1);
    const cloneLen = data.clones.length - 1;

    const cloneData = data.clones.map(clone => (
        <Slide key={clone.id} className={clone.id === activeIndex ? "active" : "inactive"}>
            <SlideImage src={clone.image} />
            <CarouselFeature>
                <Title>{clone.title}</Title>
                <SubTitle>{clone.description}</SubTitle>
            </CarouselFeature>
        </Slide>
    ));

    const cloneDots = data.clones.map(cloneDot => (
        <Dot
            key={cloneDot.id}
            className={`${activeIndex === cloneDot.id ? 'active-dot' : ''}`}
            onClick={event => setActiveIndex(event.target.value = cloneDot.id)}
        >
        </Dot>
    ));

    const prevSlide = () => setActiveIndex(activeIndex < 1 ? cloneLen : activeIndex - 1);
    const nextSlide = () => setActiveIndex(activeIndex === cloneLen ? 0 : activeIndex + 1);

    return (
        <CarouselContainer>
            {/* Slider Image */}
            <Slider>
                <SubContainer>
                    {cloneData}
                </SubContainer>
            </Slider>
            {/* Slider Image */}

            {/* Dots */}
            <Dots>
                {cloneDots}
            </Dots>
            {/* Dots */}

            {/* Arrows */}
            <Arrows>
                <Arrow className="prev" onClick={prevSlide}>
                    &#10094;
                </Arrow>
                <Arrow className="next" onClick={nextSlide}>
                    &#10095;
                </Arrow>
            </Arrows>
            {/* Arrows */}
        </CarouselContainer>
    );
};