import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideFeatureVariants, slideImageVariants, slideVariants } from "../../animations";
import {
    Navbar,
    LinksList,
    ListItem,
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
import { Container, Section, Title as SectionTitle } from "../../global";

export const Work = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeWorks, setActiveWorks] = useState("clone");
    const cloneLen = data.clones.length - 1;
    const schoolLen = data.school.length - 1;
    const freeLanceLen = data.freeLance.length - 1;

    const handleActiveWork = activeWorks => {
        setActiveWorks(activeWorks);
    };

    const handlePrevSlide = () => {
        if (activeWorks === "clone") {
            return setActiveIndex(activeIndex < 1 ? cloneLen : activeIndex - 1);
        } else if (activeWorks === "school") {
            return setActiveIndex(activeIndex < 1 ? schoolLen : activeIndex - 1);
        } else if (activeWorks === "freeLance") {
            return setActiveIndex(activeIndex < 1 ? freeLanceLen : activeIndex - 1);
        };
    };

    const handleNextSlide = () => {
        if (activeWorks === "clone") {
            return setActiveIndex(activeIndex === cloneLen ? 0 : activeIndex + 1);
        } else if (activeWorks === "school") {
            return setActiveIndex(activeIndex === schoolLen ? 0 : activeIndex + 1);
        } else if (activeWorks === "freeLance") {
            return setActiveIndex(activeIndex === freeLanceLen ? 0 : activeIndex + 1);
        };
    };

    const cloneData = data.clones.map(clone => (
        <AnimatePresence exitBeforeEnter key={clone.id}>
            <motion.div
                variants={slideVariants}
                initial="hidden"
                animate="visable"
                exit="exit"
            >
                <Slide className={clone.id === activeIndex ? "active" : "inactive"}>
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

    const schoolData = data.school.map(school => (
        <AnimatePresence exitBeforeEnter key={school.id}>
            <motion.div
                variants={slideVariants}
                initial="hidden"
                animate="visable"
                exit="exit"
            >
                <Slide className={school.id === activeIndex ? "active" : "inactive"}>
                    <motion.div variants={slideImageVariants} initial="hidden" animate="visable">
                        <SlideImageContainer>
                            <SlideImage src={school.image} />
                        </SlideImageContainer>
                    </motion.div>
                    <CarouselFeature>
                        <motion.div variants={slideFeatureVariants} initial="hidden" animate="visable">
                            <Title>{school.title}</Title>
                            <SubTitle>{school.description}</SubTitle>
                        </motion.div>
                    </CarouselFeature>
                </Slide>
            </motion.div >
        </AnimatePresence >
    ));

    const freeLanceData = data.freeLance.map(freeLance => (
        <AnimatePresence exitBeforeEnter key={freeLance.id}>
            <motion.div
                variants={slideVariants}
                initial="hidden"
                animate="visable"
                exit="exit"
            >
                <Slide className={freeLance.id === activeIndex ? "active" : "inactive"}>
                    <motion.div variants={slideImageVariants} initial="hidden" animate="visable">
                        <SlideImageContainer>
                            <SlideImage src={freeLance.image} />
                        </SlideImageContainer>
                    </motion.div>
                    <CarouselFeature>
                        <motion.div variants={slideFeatureVariants} initial="hidden" animate="visable">
                            <Title>{freeLance.title}</Title>
                            <SubTitle>{freeLance.description}</SubTitle>
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

    const schoolDots = data.school.map(schoolDot => (
        <Dot
            key={schoolDot.id}
            className={`${activeIndex === schoolDot.id ? 'active-dot' : ''}`}
            onClick={event => setActiveIndex(event.target.value = schoolDot.id)}
        >
        </Dot>
    ));

    const freeLanceDots = data.freeLance.map(freeLanceDot => (
        <Dot
            key={freeLanceDot.id}
            className={`${activeIndex === freeLanceDot.id ? 'active-dot' : ''}`}
            onClick={event => setActiveIndex(event.target.value = freeLanceDot.id)}
        >
        </Dot>
    ));

    return (
        <Section>
            <Container>
                <SectionTitle>Works</SectionTitle>

                <Navbar>
                    <LinksList>
                        <ListItem onClick={() => handleActiveWork("clone")}>
                            Clones
                        </ListItem>
                        <ListItem onClick={() => handleActiveWork("school")}>
                            School
                        </ListItem>
                        <ListItem onClick={() => handleActiveWork("freeLance")}>
                            Freelance
                        </ListItem>
                    </LinksList>
                </Navbar>

                <CarouselContainer>
                    <Slider>
                        {activeWorks === "clone" && cloneData}
                        {activeWorks === "school" && schoolData}
                        {activeWorks === "freeLance" && freeLanceData}
                    </Slider>
                    <Arrows>
                        <Arrow className="prev" onClick={handlePrevSlide}>
                            &#10094;
                        </Arrow>
                        <Arrow className="next" onClick={handleNextSlide}>
                            &#10095;
                        </Arrow>
                    </Arrows>
                    <Dots>
                        {activeWorks === "clone" && cloneDots}
                        {activeWorks === "school" && schoolDots}
                        {activeWorks === "freeLance" && freeLanceDots}
                    </Dots>
                </CarouselContainer>
            </Container>
        </Section>
    );
};