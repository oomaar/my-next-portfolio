export const routeVariants = {
    hidden: {
        opacity: 0,
    },
    visable: {
        opacity: 1,
    },
    pageExit: {
        opacity: 0,
    }
};

export const slideVariants = {
    hidden: { opacity: 0 },
    visable: {
        opacity: 1,
        transition: { delay: 0.8, duration: 1.5 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
};

export const slideImageVariants = {
    hidden: {
        y: "-100vh"
    },
    visable: {
        y: 0
    }
};

export const slideFeatureVariants = {
    hidden: {
        x: "100vw"
    },
    visable: {
        x: 0
    }
};

export const projectMindVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        transition: {
            duration: 1,
            repeat: 1
        }
    }
};

export const discoverVariants = {
    hover: {
        scale: 1.1,
    }
};