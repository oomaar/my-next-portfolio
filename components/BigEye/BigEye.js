import {
    BigEyeContainer,
    BoxCenter,
    Lashes,
    Lash1,
    Lash2,
    Lash3,
    Eye,
    Iris,
    Box1,
    Box2,
    Box3,
    Box4,
    Box5,
} from "./styledBigEye";

export const BigEye = () => {
    return (
        <BigEyeContainer>
            <BoxCenter>
                <Eye>
                    <Lashes>
                        <Lash1></Lash1>
                        <Lash2></Lash2>
                        <Lash3></Lash3>
                    </Lashes>
                    <Iris></Iris>
                </Eye>
            </BoxCenter>
            <Box1></Box1>
            <Box2></Box2>
            <Box3></Box3>
            <Box4></Box4>
            <Box5></Box5>
        </BigEyeContainer>
    );
};