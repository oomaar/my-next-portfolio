import {
    Container,
    Arrow
} from "./styledArrows";

export const Arrows = ({ prevSlide, nextSlide }) => {
    return (
        <Container>
            <Arrow className="prev" onClick={prevSlide}>
                &#10094;
            </Arrow>
            <Arrow className="next" onClick={nextSlide}>
                &#10095;
            </Arrow>
        </Container>
    );
};