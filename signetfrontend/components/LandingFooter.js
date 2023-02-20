import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import elements from "../img/elements"
import Div1 from "./animatedelements/Div1"

const Section = styled.section`
    min-height: 100vh;
    width: 100vw;
    max-width: 1920px;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 0;
`

const LogoContainer = styled(motion.div)`
    width: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 10rem;
        height: auto;
    }
`
const DivContainer = styled(motion.div)`
    width: 100%;
    height: 4.25rem;
    display: flex;
    justify-content: center;
    object-fit: contain;
    z-index: 0;
    position: absolute;
    bottom: -7rem;
`

const FooterComponent = styled(motion.footer)`
    width: 80vw;
    max-width: 1920px;

    @media (max-width: 48em) {
        width: 90vw;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        margin: 2rem;
        margin-top: 4rem;
        padding: 0 1rem;
        border-top: 1px solid white;
        border-bottom: 1px solid white;

        @media (max-width: 48em) {
            justify-content: center;
            flex-direction: column;
        }
    }

    li {
        padding: 2rem;
        font-size: ${(props) => props.theme.fontlg};
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }

        @media (max-width: 48em) {
            padding: 1rem;
            font-size: ${(props) => props.theme.fontmd};
        }
    }
`

const Bottom = styled.div`
    padding: 0.5rem 0;
    margin: 0 4rem;
    font-size: ${(props) => props.theme.fontlg};

    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        text-decoration: underline;
    }

    @media (max-width: 64em) {
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin: 0;
        span {
            transform: none !important;
        }
    }

    @media (max-width: 48em) {
        font-size: ${(props) => props.theme.fontmd};
    }
`

const Footer = ({ michroma, russo }) => {
    const [click, setClick] = useState(false)
    const scrollTo = (id) => {
        let element = document.getElementById(id)

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        })

        setClick(!click)
    }
    return (
        <Section>
            <LogoContainer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                    duration: 3,
                }}
            >
                <img src={elements.logotextwhite.src} />
            </LogoContainer>
            <FooterComponent
                className={michroma}
                initial={{ y: "-400px" }}
                whileInView={{ y: 0 }}
                viewport={{ once: false }}
                transition={{
                    duration: 2,
                }}
            >
                <ul>
                    <li onClick={() => scrollTo("home")}>HOME</li>
                    <li onClick={() => scrollTo("about")}>ABOUT</li>
                    <li onClick={() => scrollTo("feature")}>FEATURE</li>
                    <li onClick={() => scrollTo("roadmap")}>ROADMAP</li>
                </ul>
                <Bottom>
                    <span>&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
                    <span data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                        Made with &hearts; by &nbsp;
                        <a href="https://outerspace.ai" target="_blank" rel="noreferrer">
                            outerspace.ai
                        </a>
                    </span>
                </Bottom>
            </FooterComponent>
            <DivContainer
                key="div1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                    delay: 2,
                    type: "spring",
                }}
            >
                <Div1 />
            </DivContainer>
        </Section>
    )
}

export default Footer
//123
