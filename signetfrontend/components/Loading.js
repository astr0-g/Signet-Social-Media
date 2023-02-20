import styled, { keyframes } from "styled-components"

const Rotate = keyframes`
    0% {
        transform: rotate(10deg);
    }

    100% {
        transform: rotate(-10deg);
    }
`

const RingRotate = keyframes`
    0% {
        transform: rotateX(110deg) rotateZ(0deg) translate(-50px, 5px);
    }

    100% {
            transform: rotateX(110deg) rotateZ(360deg) translate(-50px, 5px);
    }
`

const Dots = keyframes`
    0% {
        box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.3);
    }
    100% {
        box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.3);
    }
`

const TextAnimation = keyframes`
    0% {
        letter-spacing: 0px;
        color: white;
    }
    25% {
        letter-spacing: 3px;
        color: rgb(54, 112, 150);
    }
    50% {
        letter-spacing: 0px;
        color: rgb(72, 135, 135);
    }
    75% {
        letter-spacing: 3px;
        color: rgb(143, 219, 197);
    }
    100% {
        letter-spacing: 0px;
        color:  rgb(128, 144, 168);;
    }
`

const Content = styled.div`
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PlanetRing = styled.div`
    width: 67%;
    height: 67%;
    background-color: rgb(64, 96, 128);
    border-radius: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center center;
    box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
    animation: ${Rotate} 2s ease infinite alternate;
`

const Planet = styled.div`
    width: 96%;
    height: 96%;
    background-color: rgb(128, 144, 168);
    border-radius: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    transform-origin: center center;
    box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
    animation: ${Rotate} 1s ease infinite alternate;
`

const Ring = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-color: rgba(216, 236, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: 33% center;
    box-shadow: 2px -10px 0px rgba(0, 0, 0, 0.1), inset -5px -10px 0px rgba(0, 0, 0, 0.1);
    animation: ${RingRotate} 3s ease infinite;

    /* small ball */
    &:before {
        content: "";
        position: absolute;
        width: 10px;
        height: 30px;
        border-radius: 100%;
        background-color: rgba(216, 216, 216, 0.5);
        z-index: 2;
        left: calc(0px - 5px);
        box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.2);
    }
    /* inner ring */
    &:after {
        content: "";
        position: absolute;
        width: 240px;
        height: 240px;
        border-radius: 100%;
        background-color: rgba(143, 192, 216, 0.5);
        box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
    }
`

const CoverRing = styled.div`
    position: absolute;
    width: 100%;
    height: 50%;
    border-bottom-left-radius: 80%;
    border-bottom-right-radius: 80%;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    transform: translate(0px, -17px);
    background-color: rgb(128, 144, 168);
    z-index: 2;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
`

const Spot = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
`

const Span = styled.span`
    width: 30px;
    height: 30px;
    background-color: rgb(72, 144, 144);
    position: absolute;
    border-radius: 100%;
    box-shadow: inset -2px 3px 0px rgba(0, 0, 0, 0.3);
    animation: ${Dots} 2s ease infinite alternate;

    &:nth-child(1) {
        top: 20px;
        right: 50px;
    }

    &:nth-child(2) {
        top: 40px;
        left: 50px;
        width: 15px;
        height: 15px;
    }

    &:nth-child(3) {
        top: 80px;
        left: 20px;
        width: 25px;
        height: 25px;
    }

    &:nth-child(4) {
        top: 80px;
        left: 90px;
        width: 40px;
        height: 40px;
    }

    &:nth-child(5) {
        top: 160px;
        left: 70px;
        width: 15px;
        height: 15px;
    }

    &:nth-child(6) {
        top: 165px;
        left: 125px;
        width: 10px;
        height: 10px;
    }

    &:nth-child(7) {
        top: 90px;
        left: 150px;
        width: 15px;
        height: 15px;
    }
`

const Text = styled.p`
    color: white;
    font-size: 21px;
    z-index: 2;
    position: absolute;
    bottom: -20px;
    font-family: "Roboto Mono", monospace;
    animation: ${TextAnimation} 4s ease infinite;
    width: 100px;
    text-align: center;
`

export default function Loading() {
    return (
        <Content>
            <PlanetRing>
                <Planet>
                    {/* <Ring></Ring>
                <CoverRing></CoverRing> */}
                    <Spot>
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                        <Span></Span>
                    </Spot>
                </Planet>
            </PlanetRing>
            <Text>loading</Text>
        </Content>
    )
}
