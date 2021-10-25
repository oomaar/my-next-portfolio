import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideFeatureVariants, slideImageVariants, slideVariants } from "../../animations";
import {
    CarouselContainer,
    Slider,
    Slide,
    SlideImage,
    SlideImageContainer,
    CarouselFeature,
    Title,
    SubTitle,
    Arrows,
    Arrow,
    Dots,
    Dot,
} from "./styledWork";

export const Work = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cloneLen = data.clones.length - 1;

    const cloneData = data.clones.map(clone => (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                variants={slideVariants}
                initial="hidden"
                animate="visable"
                exit="exit"
            >
                <Slide key={clone.id} className={clone.id === activeIndex ? "active" : "inactive"}>
                    <motion.div variants={slideImageVariants} initial="hidden" animate="visable">
                        <SlideImageContainer>
                            <SlideImage src={clone.image} />
                        </SlideImageContainer>
                    </motion.div>
                    <CarouselFeature>
                        <motion.div variants={slideFeatureVariants} initial="hidden" animate="visable">
                            <Title>{clone.title}</Title>
                            <SubTitle>{clone.description}</SubTitle>
                        </motion.div>
                    </CarouselFeature>
                </Slide>
            </motion.div >
        </AnimatePresence >
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
            <Slider>
                {cloneData}
            </Slider>
            <Arrows>
                <Arrow className="prev" onClick={prevSlide}>
                    &#10094;
                </Arrow>
                <Arrow className="next" onClick={nextSlide}>
                    &#10095;
                </Arrow>
            </Arrows>
            <Dots>{cloneDots}</Dots>
        </CarouselContainer>
    );
};