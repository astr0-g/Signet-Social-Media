import Image from "next/image"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import styled, { keyframes } from "styled-components"
import logo from "../public/logoWhite.png"
import { useState, useEffect } from "react"
import Signetor from "./Signetor"
import { useAccount } from "wagmi"
import { useRouter } from "next/router"
import { useConnect } from "wagmi"
import { IoTelescopeSharp, IoRocketSharp } from "react-icons/io5"
import elements from "../img/elements"
import { motion, AnimatePresence } from "framer-motion"
import { Inter, Michroma, Russo_One } from "@next/font/google"
import ControlPanel from "./ControlPanel"
import Typewriter from "typewriter-effect"
import Div1 from "./animatedelements/Div1"
import ThickDiv1 from "./animatedelements/ThickDiv1"
import Loader1 from "./animatedelements/Loader1"
import { BsDashLg } from "react-icons/bs"
import LandingFooter from "./LandingFooter.js"

const Whitespace = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: absolute;
    top: 0;
    z-index: 100;
`

const SectionContainer = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
`

const Section = styled.div`
    width: 100%;
    max-width: 1920px;
    overflow: hidden;
`

const Content = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    z-index: 100;
`

const Info = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    @media only screen and (min-width: 1024px) {
        top: 6.5rem;
    }
`

const ButtonContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 3.75rem;

    @media only screen and (min-width: 1024px) {
        position: relative;
        bottom: 0;
        margin-top: 2rem;
    }
`

const WalletButton = styled.div`
    width: 81%;
    padding: 0.75rem 0;
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 0px;
    z-index: 10;
    padding-left: 1.5rem;
`

const Button = styled.a`
    width: 10rem;
    text-align: center;
    color: white;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
    margin: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${elements.buttonwhite6.src});
    background-repeat: no-repeat;
    background-position: center;

    &:hover {
        transform: scale(1, 1);
    }

    &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 100%;
        height: 100%;
        transition: all 0.2s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
    }

    @media only screen and (min-width: 1024px) {
        width: 15rem;
        font-size: 21px;
        margin-right: 2rem;
    }
`

const Button2 = styled.button`
    width: 10rem;
    color: black;
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
    margin: 1rem 0.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0.5rem 0;
    background-repeat: no-repeat;
    background-position: center;
    color: rgba(32, 32, 32, 0.98);

    &:hover {
        transform: scale(1, 1);
    }

    &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 100%;
        height: 100%;
        border-radius: 8px;
        transition: all 0.2s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
    }

    @media only screen and (min-width: 1024px) {
        width: 15rem;
        font-size: 21px;
        margin-left: 2rem;
    }
`

const LogoContainer = styled(motion.div)`
    width: 6rem;
    height: 6rem;
    background-image: url(${elements.circlewhite10.src});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    position: absolute;
    top: 0.5rem;
    z-index: 10;

    @media only screen and (min-width: 1024px) {
        top: 5rem;
    }
`

const Title = styled(motion.h1)`
    width: 100vw;
    font-size: 15px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SloganContainer = styled(motion.div)`
    width: 100vw;
    font-size: 15px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(32, 32, 32, 0.8);
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media only screen and (min-width: 1024px) {
        width: 33rem;
        font-size: 20px;
    }
`

const SloganContainer2 = styled(motion.div)`
    width: 100vw;
    font-size: 14px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(32, 32, 32, 0.8);
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media only screen and (min-width: 1024px) {
        width: 33rem;
        font-size: 18px;
    }
`

const ContainerContainer = styled.div`
    width: 100vw;
    font-size: 15px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

const ContainerContainerContainer = styled.div`
    @media only screen and (min-width: 1024px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-top: 3rem;
    }
`

const TitleMain = styled.h1`
    font-size: 12px;
    color: white;
    margin-top: 0.5rem;
    padding: 0 1.25rem;

    @media only screen and (min-width: 1024px) {
        font-size: 14px;
    }
    @media only screen and (min-width: 1408px) {
        font-size: 15px;
    }
`

const Title2 = styled.h1`
    font-size: 12px;
    color: white;
    font-weight: 400;
    margin-top: 1rem;
    padding: 0 2.5rem;
`

const Title3 = styled.h1`
    font-size: 14px;
    color: white;
    font-weight: 500;
    margin-top: 0.125rem;
`

const Subtitle = styled.p`
    width: 90%;
    font-size: 11px;
    color: white;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    padding: 1rem 1.25rem;
    margin-left: 0.75rem;
    line-height: 1.8;

    @media only screen and (min-width: 1024px) {
        font-size: 14px;
    }
`

const SubSection = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(26, 34, 42, 0.33);
    padding: 0.5rem 1rem;
    border-radius: 12px;
    padding-top: 0;
    position: relative;

    @media only screen and (min-width: 1024px) {
        justify-content: start;
    }
`

const SubSection2 = styled(motion.div)`
    width: 100vw;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: rgba(26, 34, 42, 0.33);
    padding: 0.5rem 1rem;
    padding-top: 0;
    position: relative;
`

const WalletContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0 1.5rem;
    padding-top: 1.5rem;
    margin-top: 1.25rem;
    position: fixed;
    z-index: 100;
`

const ImgContainer = styled.div`
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0.4rem;
    border-radius: 50%;
    margin: 0 1rem;
    box-shadow: 0 2px 0 rgba(128, 128, 128, 1);
`

const WalletName = styled.div`
    font-size: 10px;
    font-weight: 600;
`

const ErrorMsg = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-top: 0.5rem;
    font-style: oblique;
`

const ControlPanelContainer = styled(motion.div)`
    width: 100%;
    padding-right: 0.75rem;
    padding-left: 0;
    padding-bottom: 0;
    padding-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;

    @media only screen and (min-width: 389px) {
        margin-top: 0;
    }
    @media only screen and (min-width: 1024px) {
        margin-top: 3rem;
        padding-right: 0;
        width: 50%;
    }
    @media only screen and (min-width: 1410px) {
        /* margin-top: 10rem; */
        width: 40%;
    }
`

const russo = Russo_One({
    weight: "400",
    subsets: ["latin"],
})

const michroma = Michroma({
    weight: "400",
    subsets: ["latin"],
})

const DivContainer = styled(motion.div)`
    width: 100%;
    height: 4.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    z-index: 0;
    position: absolute;
    top: 2rem;

    @media only screen and (min-width: 1024px) {
        top: 6.5rem;
        position: relative;
    }
`

const ThickDivContainer = styled(motion.div)`
    width: 100vw;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    object-fit: cover;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: rgba(26, 34, 42, 0.33);
`

const ThinDivContainer = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    height: 1rem;
    display: flex;
    justify-content: center;
    object-fit: cover;
    position: absolute;
    bottom: 20%;

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`

const TitleText = styled.h1`
    font-size: 15px;
    color: white;
    overflow: hidden;
    display: flex;
    justify-content: end;
    align-items: end;
    margin-bottom: 0.5rem;
    height: 3rem;

    span {
        text-transform: uppercase;
    }
    .text-1 {
        color: white;
        font-size: 18px;
    }
    .text-2 {
        color: white;
        font-size: 13px;
    }
    .text-3 {
        color: white;
        font-size: 15px;
    }
    .text-4 {
        color: white;
        font-size: 24px;
    }
    .text-5 {
        color: white;
        font-size: 18px;
    }
    .text-6 {
        color: white;
        font-size: 21px;
    }

    @media only screen and (min-width: 1024px) {
        height: 20rem;
        justify-content: center;
        align-items: flex-start;
    }
`

const Screen = styled(motion.div)`
    width: 100%;
    background-image: url(${elements.titlecontrolpanel1.src});
    background-repeat: no-repeat;
    background-position: center;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-size: 15px;
    position: absolute;
    top: 7.5rem;

    @media only screen and (min-width: 385px) {
        top: 8rem;
    }
    @media only screen and (min-width: 1024px) {
        position: relative;
        top: 0;
        background-image: none;
        height: 20rem;
        justify-content: center;
    }
`

const LogoImg = styled(motion.img)`
    width: 40%;
    object-fit: contain;
    z-index: 10;
`

const Background = styled(motion.img)`
    width: 100vw;
    height: 200vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    position: fixed;
    top: 0;
    object-fit: cover;

    @media only screen and (min-width: 1024px) {
        height: 300vh;
    }
`

const Slogan = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 100;

    @media only screen and (min-width: 1024px) {
        width: 33vw;
        height: auto;
        justify-content: space-around;
    }
`

const Logo = styled(motion.img)`
    width: 8rem;
    object-fit: contain;
    z-index: 10;

    @media only screen and (min-width: 1024px) {
        width: 16rem;
        height: 16rem;
    }
`

const Msg = styled(motion.div)`
    width: 10rem;
    text-align: center;
    font-size: 11px;
    color: white;
    z-index: 10;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 12px;

    @media only screen and (min-width: 1024px) {
        width: 14rem;
        font-size: 15px;
    }
`

const Wallet = styled(motion.div)`
    width: 21rem;
    height: 14rem;
    object-fit: contain;
    background-image: url(${elements.customcontainer1.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
`

const TitleContainer = styled(motion.div)`
    width: 16.5rem;
    height: 3.5rem;
    object-fit: contain;
    background-image: url(${elements.titlecontrolpanel1.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    color: white;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(32, 32, 32, 0.9);
    border-radius: 25px;

    @media only screen and (min-width: 1024px) {
        font-size: 24px;
        width: 22rem;
        height: 4.65rem;
    }
`

const TitleContainer2 = styled(motion.h1)`
    width: 100%;
    height: 5.5rem;
    object-fit: contain;
    background-image: url(${elements.titlecontainer1.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media only screen and (min-width: 1024px) {
        height: 7rem;
    }
`

const TitleLayer1 = styled(motion.div)`
    width: 100vw;
    height: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${elements.customcomp1.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (min-width: 1024px) {
        background-repeat: repeat-x;
        background-size: contain;
        width: 100%;
        height: 11rem;
    }
`

const SubHeader = styled.div`
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const SubBottom = styled.div`
    width: 100vw;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    margin-bottom: 1rem;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        margin-bottom: 4rem;
        margin-top: 2rem;
    }
`

const SubTitleContainer = styled.div`
    width: 22rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${elements.containerwoheader.src});
    background-color: rgba(32, 32, 32, 0.75);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 0.25rem;
    border-radius: 30px;

    @media only screen and (min-width: 1024px) {
        width: 32rem;
        height: 36rem;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    position: relative;
`

const Container2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    position: relative;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 4rem;
        width: 33%;
    }
`

const Container3 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    position: relative;

    @media only screen and (min-width: 1024px) {
        margin-top: 0;
        width: 33%;
    }
`

const Subtitletitle = styled.div`
    width: 18rem;
    height: 4rem;
    background-image: url(${elements.titlecontainer2.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    font-size: 16px;
    margin-bottom: -1.5rem;
    color: rgba(26, 34, 42, 1);
    opacity: 0.9;

    @media only screen and (min-width: 1024px) {
        width: 24rem;
        height: 4.5rem;
        font-size: 18px;
        margin-bottom: -2rem;
    }
`

const Subtitletitle3 = styled.div`
    width: 18rem;
    height: 3rem;
    background-image: url(${elements.buttonwhite4.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
    color: white;
    z-index: 10;
    font-size: 21px;
    margin-right: 6.5rem;
    margin-bottom: -0.25rem;

    @media only screen and (min-width: 1024px) {
        width: 21rem;
        height: 3.5rem;
        font-size: 24px;
        margin-right: 12rem;
    }
`

const Subtitletitle4 = styled.div`
    width: 18rem;
    height: 3.5rem;
    background-image: url(${elements.buttonwhite3.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(26, 34, 42, 1);
    opacity: 0.9;
    color: white;
    z-index: 10;
    font-size: 21px;
    margin-right: 7rem;
    margin-bottom: -0.25rem;
    margin-top: 0.5rem;

    @media only screen and (min-width: 1024px) {
        width: 21rem;
        height: 4rem;
        font-size: 24px;
        margin-right: 10rem;
        margin-top: 2rem;
    }
`

const Subtitletitle2 = styled.div`
    width: 18rem;
    height: 3.5rem;
    background-image: url(${elements.buttonwhite4.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    color: rgba(26, 34, 42, 1);
    opacity: 0.9;
    position: absolute;
    top: 9.5rem;
    margin-left: 3rem;
    color: white;
    color: #ffed00;

    @media only screen and (min-width: 1024px) {
        width: 21rem;
        height: 4rem;
        font-size: 24px;
        margin-left: 9rem;
        top: 13rem;
    }
`

const Subtitletitle5 = styled.div`
    width: 18rem;
    height: 3.5rem;
    background-image: url(${elements.buttonwhite3.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 21px;
    color: rgba(26, 34, 42, 1);
    opacity: 0.9;
    position: absolute;
    top: 13rem;
    margin-left: 3rem;
    color: white;

    @media only screen and (min-width: 1024px) {
        width: 21rem;
        height: 4rem;
        font-size: 24px;
        margin-left: 9rem;
        top: 16rem;
    }
`

const Subtitletitle6 = styled.div`
    width: 18rem;
    height: 3.5rem;
    background-image: url(${elements.buttonwhite3.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(26, 34, 42, 1);
    opacity: 0.9;
    color: white;
    z-index: 10;
    font-size: 21px;
    margin-right: 7rem;
    margin-top: 6.5rem;

    @media only screen and (min-width: 1024px) {
        width: 21rem;
        height: 4rem;
        font-size: 24px;
        margin-right: 12rem;
        margin-top: 11rem;
    }
`

const Subtitletitle7 = styled.div`
    width: 18rem;
    height: 4rem;
    background-image: url(${elements.buttonwhite3.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
    color: #ffed00;
    z-index: 10;
    font-size: 24px;
    margin-bottom: 2rem;
`

const SubContainer = styled.div`
    width: 22rem;
    height: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${elements.container2.src});
    background-color: rgba(32, 32, 32, 0.5);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 11px;
    padding: 0 1.5rem;
    line-height: 1.8;

    @media only screen and (min-width: 1024px) {
        width: 28rem;
        height: 16rem;
        font-size: 13px;
        line-height: 2;
    }
`

const SubContainer2 = styled.div`
    width: 26rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-image: url(${elements.container3.src});
    background-color: rgba(32, 32, 32, 0.5);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 10px;
    opacity: 0.9;
    padding-top: 1.5rem;
    text-align: left;
    line-height: 2;
    margin-top: 0.75rem;
    position: relative;

    @media only screen and (min-width: 1024px) {
        width: 32rem;
        height: 40rem;
        font-size: 12px;
        border-radius: 15px;
    }
`

const RoadMapText1 = styled.div`
    width: 16rem;
    margin-top: 0.5rem;

    @media only screen and (min-width: 1024px) {
        width: 21rem;
        margin-top: 1rem;
    }
`

const RoadMapText2 = styled.div`
    width: 16rem;
    margin-top: 8.75rem;

    @media only screen and (min-width: 1024px) {
        width: 21rem;
        margin-top: 12rem;
    }
`

const RoadMapText3 = styled.div`
    width: 16rem;
    margin-top: 2rem;

    @media only screen and (min-width: 1024px) {
        width: 21rem;
        margin-top: 2rem;
    }
`

const RoadMapText4 = styled.div`
    width: 16rem;
    margin-top: 6rem;

    @media only screen and (min-width: 1024px) {
        width: 21rem;
        margin-top: 9.5rem;
    }
`

const RoadMapText5 = styled.div`
    width: 16rem;
    margin-top: 1rem;

    @media only screen and (min-width: 1024px) {
        width: 21rem;
        margin-top: 2rem;
        margin-right: 2rem;
    }
`

const SubContainer3 = styled.div`
    width: 24rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-image: url(${elements.container5.src});
    background-color: rgba(32, 32, 32, 0.5);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 10px;
    opacity: 0.9;
    padding-top: 2rem;
    text-align: left;
    line-height: 2;
    margin-top: -1rem;
    position: relative;
    margin-left: 1.25rem;

    @media only screen and (min-width: 1024px) {
        width: 32rem;
        height: 51rem;
        padding-top: 0rem;
        margin-top: 10rem;
        font-size: 12px;
        border-radius: 15px;
    }
`

const LogoBackground = styled(motion.div)`
    position: absolute;
    width: 6.5rem;
    height: 6.5rem;
    top: 0.25rem;
    background-color: rgba(32, 32, 32, 1);
    z-index: 1;
    border-radius: 50%;

    @media only screen and (min-width: 1024px) {
        top: 4.75rem;
    }
`

const ElementContainer = styled.div`
    width: 100%;

    @media only screen and (min-width: 1024px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        margin-top: 6rem;
    }
`

const ElementContainer2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        width: 50%;
    }
`

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => {
            setMatches(media.matches)
        }
        media.addListener(listener)
        return () => media.removeListener(listener)
    }, [matches, query])

    return matches
}

export default function Welcome() {
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const [isConnected, setIsConnected] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [openWallet, setOpenWallet] = useState(false)
    const address = useAccount()
    console.log(address)
    console.log(elements.buttonwhite1.src)
    const iconlist = ["ledgerLogo.png", "metamaskLogo.png", "walletconnectLogo.png"]
    let mobile = useMediaQuery("(max-width: 1023px)")
    let desktop = useMediaQuery("(min-width: 1024px)")

    return (
        <SectionContainer
            key="Welcome"
            initial={{ y: 150, opacity: 0, scale: 1.05 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 0, opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
        >
            <Section>
                <Content>
                    <Info>
                        <SubSection id="home">
                            <LogoContainer
                                key="logoBox"
                                animate={{
                                    opacity: [0.7, 1, 0.7],
                                    scale: [1, 1.05, 1],
                                    y: [-150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -150],
                                }}
                                transition={{
                                    duration: 20,
                                    type: "spring",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            >
                                <LogoImg src={elements.logowhitehollow1.src} />
                            </LogoContainer>
                            <LogoBackground
                                key="logoBox"
                                animate={{
                                    scale: [1, 1.05, 1],
                                    y: [-150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -150],
                                }}
                                transition={{
                                    duration: 20,
                                    type: "spring",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
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
                            <ElementContainer>
                                <ElementContainer2>
                                    {mobile && (
                                        <Screen
                                            key="screen"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{
                                                scale: 1,
                                                opacity: 1,
                                            }}
                                            transition={{
                                                duration: 2,
                                                delay: 7,
                                                type: "spring",
                                            }}
                                        >
                                            <TitleText className={russo.className}>
                                                <Typewriter
                                                    options={{
                                                        autoStart: true,
                                                        loop: true,
                                                        delay: 90,
                                                    }}
                                                    onInit={(typewriter) => {
                                                        typewriter
                                                            .pauseFor(8000)
                                                            .typeString(
                                                                '<span class="text-1">HI THERE !</span>'
                                                            )
                                                            .pauseFor(1000)
                                                            .deleteAll(0.8)
                                                            .typeString(
                                                                '<span class="text-1">WELCOME TO SIGNET !</span>'
                                                            )
                                                            .pauseFor(1500)
                                                            .deleteAll(0.8)
                                                            .changeDelay(70)
                                                            .typeString(
                                                                '<span class="text-2">SIGNET IS THE WORLD&lsquo;S FIRST FULLY <br/> DECENTRALIZED SOCIAL MEDIA</span>'
                                                            )
                                                            .pauseFor(500)
                                                            .changeDelay(90)
                                                            .typeString(
                                                                '<span class="text-2"><br/> PRESENT TO YOU BY OUTERSPACE.AI </span>'
                                                            )
                                                            .pauseFor(800)
                                                            .typeString(
                                                                '<span class="text-3"><br/> HOPE YOU ENJOY &#128521;</span>'
                                                            )
                                                            .pauseFor(3000)
                                                            .typeString(
                                                                '<span class="text-3"><br/> SIGNET . INK</span>'
                                                            )
                                                            .pauseFor(15000)
                                                            .deleteAll(5)
                                                            .typeString(
                                                                '<span class="text-2"><br/> Thanks</span>'
                                                            )
                                                            .pauseFor(300)
                                                            .typeString(
                                                                '<span class="text-3"><br/> I LOVE YOU TOO &#128150;</span>'
                                                            )
                                                            .pauseFor(2000)
                                                            .deleteAll(0.5)
                                                            .typeString(
                                                                '<span class="text-3"><br/> SIGNET . INK</span>'
                                                            )
                                                            .pauseFor(800)
                                                            .typeString(
                                                                '<span class="text-3"><br/> WELCOME TO THE FUTURE &#128125;</span>'
                                                            )
                                                            .pauseFor(20000)
                                                            .start()
                                                    }}
                                                />
                                            </TitleText>
                                        </Screen>
                                    )}
                                    {desktop && (
                                        <Screen
                                            key="screen"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{
                                                scale: 1,
                                                opacity: 1,
                                            }}
                                            transition={{
                                                duration: 2,
                                                delay: 7,
                                                type: "spring",
                                            }}
                                        >
                                            <TitleText className={russo.className}>
                                                <Typewriter
                                                    options={{
                                                        autoStart: true,
                                                        loop: true,
                                                        delay: 90,
                                                    }}
                                                    onInit={(typewriter) => {
                                                        typewriter
                                                            .pauseFor(8000)
                                                            .typeString(
                                                                '<span class="text-4">HI THERE !</span>'
                                                            )
                                                            .pauseFor(1000)
                                                            .typeString(
                                                                '<span class="text-4"><br/> WELCOME TO SIGNET !</span>'
                                                            )
                                                            .pauseFor(1500)
                                                            .changeDelay(70)
                                                            .typeString(
                                                                '<span class="text-5"><br/> SIGNET IS THE WORLD&lsquo;S FIRST FULLY <br/> DECENTRALIZED SOCIAL MEDIA</span>'
                                                            )
                                                            .pauseFor(500)
                                                            .changeDelay(90)
                                                            .typeString(
                                                                '<span class="text-5"><br/> PRESENT TO YOU BY OUTERSPACE.AI </span>'
                                                            )
                                                            .pauseFor(800)
                                                            .typeString(
                                                                '<span class="text-6"><br/> HOPE YOU ENJOY &#128521;</span>'
                                                            )
                                                            .pauseFor(2000)
                                                            .typeString(
                                                                '<span class="text-6"><br/> SIGNET . INK</span>'
                                                            )
                                                            .pauseFor(15000)
                                                            .typeString(
                                                                '<span class="text-6"><br/> WELCOME TO THE FUTURE &#128125;</span>'
                                                            )
                                                            .pauseFor(20000)
                                                            .start()
                                                    }}
                                                />
                                            </TitleText>
                                        </Screen>
                                    )}

                                    <ButtonContainer
                                        key="bc2"
                                        initial={{ x: 0, scale: 0.5, opacity: 0 }}
                                        animate={{
                                            x: 0,
                                            scale: 1,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: 2,
                                            delay: 6,
                                            type: "spring",
                                            masss: 2,
                                            bounce: 0.3,
                                        }}
                                    >
                                        <Button href="/explore">
                                            <IoTelescopeSharp size={24} className="mr-2" />
                                            <div className="z-10">
                                                <h1 className={russo.className}>EXPLORE</h1>
                                            </div>
                                        </Button>
                                        <ConnectButton.Custom>
                                            {({
                                                account,
                                                chain,
                                                openAccountModal,
                                                openChainModal,
                                                openConnectModal,
                                                authenticationStatus,
                                                mounted,
                                            }) => {
                                                // Note: If your app doesn't use authentication, you
                                                // can remove all 'authenticationStatus' checks
                                                const ready =
                                                    mounted && authenticationStatus !== "loading"
                                                const connected =
                                                    ready &&
                                                    account &&
                                                    chain &&
                                                    (!authenticationStatus ||
                                                        authenticationStatus === "authenticated")

                                                return (
                                                    <div
                                                        {...(!ready && {
                                                            "aria-hidden": true,
                                                            style: {
                                                                opacity: 0,
                                                                pointerEvents: "none",
                                                                userSelect: "none",
                                                            },
                                                        })}
                                                    >
                                                        {(() => {
                                                            if (!connected) {
                                                                return (
                                                                    <Button2
                                                                        onClick={openConnectModal}
                                                                    >
                                                                        {mobile && (
                                                                            <div className="z-10 ml-5">
                                                                                <h1
                                                                                    className={
                                                                                        russo.className
                                                                                    }
                                                                                >
                                                                                    CONNECT
                                                                                </h1>
                                                                            </div>
                                                                        )}
                                                                        {desktop && (
                                                                            <div className="z-10 ml-10">
                                                                                <h1
                                                                                    className={
                                                                                        russo.className
                                                                                    }
                                                                                >
                                                                                    CONNECT
                                                                                </h1>
                                                                            </div>
                                                                        )}
                                                                        {mobile && (
                                                                            <svg
                                                                                id="Layer_1"
                                                                                fill="#fff"
                                                                                data-name="Layer 1"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 283.63 71.49"
                                                                                className="absolute w-[10rem]"
                                                                            >
                                                                                <motion.path
                                                                                    className="cls-1"
                                                                                    d="m195.37,71.49H0V0h195.37c13.96,13.96,21.78,21.78,35.74,35.74h0c-13.96,13.97-21.78,21.79-35.74,35.75Z"
                                                                                />
                                                                                <motion.path
                                                                                    className="cls-1"
                                                                                    d="m195.37,0c13.96,13.96,21.78,21.78,35.74,35.74h0c-13.96,13.97-21.78,21.79-35.74,35.75"
                                                                                />
                                                                                <motion.path
                                                                                    key="box"
                                                                                    animate={{
                                                                                        opacity: [
                                                                                            0.4,
                                                                                            0.8,
                                                                                            0.4,
                                                                                        ],
                                                                                    }}
                                                                                    transition={{
                                                                                        duration: 4,
                                                                                        ease: "easeIn",
                                                                                        repeat: Infinity,
                                                                                    }}
                                                                                    className="cls-1"
                                                                                    d="m222.43,71.49c13.96-13.96,21.78-21.78,35.74-35.74h0c-13.96-13.97-21.78-21.79-35.74-35.75h-15.17c13.96,13.96,21.78,21.78,35.74,35.74h0c-13.96,13.97-21.78,21.79-35.74,35.75h15.17Z"
                                                                                />
                                                                                <motion.path
                                                                                    key="box2"
                                                                                    animate={{
                                                                                        opacity: [
                                                                                            0, 0.4,
                                                                                            0,
                                                                                        ],
                                                                                    }}
                                                                                    transition={{
                                                                                        duration: 2,
                                                                                        ease: "easeIn",
                                                                                        repeat: Infinity,
                                                                                        delay: 2,
                                                                                    }}
                                                                                    className="cls-1"
                                                                                    d="m247.89,71.49c13.96-13.96,21.78-21.78,35.74-35.74h0c-13.96-13.97-21.78-21.79-35.74-35.75h-15.17c13.96,13.96,21.78,21.78,35.74,35.74h0c-13.96,13.97-21.78,21.79-35.74,35.75h15.17Z"
                                                                                />
                                                                            </svg>
                                                                        )}
                                                                        {desktop && (
                                                                            <svg
                                                                                id="Layer_1"
                                                                                fill="#fff"
                                                                                data-name="Layer 1"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 283.63 71.49"
                                                                                className="absolute w-[15rem]"
                                                                            >
                                                                                <motion.path
                                                                                    className="cls-1"
                                                                                    d="m195.37,71.49H0V0h195.37c13.96,13.96,21.78,21.78,35.74,35.74h0c-13.96,13.97-21.78,21.79-35.74,35.75Z"
                                                                                />
                                                                                <motion.path
                                                                                    className="cls-1"
                                                                                    d="m195.37,0c13.96,13.96,21.78,21.78,35.74,35.74h0c-13.96,13.97-21.78,21.79-35.74,35.75"
                                                                                />
                                                                                <motion.path
                                                                                    key="box"
                                                                                    animate={{
                                                                                        opacity: [
                                                                                            0.4,
                                                                                            0.8,
                                                                                            0.4,
                                                                                        ],
                                                                                    }}
                                                                                    transition={{
                                                                                        duration: 4,
                                                                                        ease: "easeIn",
                                                                                        repeat: Infinity,
                                                                                    }}
                                                                                    className="cls-1"
                                                                                    d="m222.43,71.49c13.96-13.96,21.78-21.78,35.74-35.74h0c-13.96-13.97-21.78-21.79-35.74-35.75h-15.17c13.96,13.96,21.78,21.78,35.74,35.74h0c-13.96,13.97-21.78,21.79-35.74,35.75h15.17Z"
                                                                                />
                                                                                <motion.path
                                                                                    key="box2"
                                                                                    animate={{
                                                                                        opacity: [
                                                                                            0, 0.4,
                                                                                            0,
                                                                                        ],
                                                                                    }}
                                                                                    transition={{
                                                                                        duration: 2,
                                                                                        ease: "easeIn",
                                                                                        repeat: Infinity,
                                                                                        delay: 2,
                                                                                    }}
                                                                                    className="cls-1"
                                                                                    d="m247.89,71.49c13.96-13.96,21.78-21.78,35.74-35.74h0c-13.96-13.97-21.78-21.79-35.74-35.75h-15.17c13.96,13.96,21.78,21.78,35.74,35.74h0c-13.96,13.97-21.78,21.79-35.74,35.75h15.17Z"
                                                                                />
                                                                            </svg>
                                                                        )}
                                                                    </Button2>
                                                                )
                                                            }

                                                            if (chain.unsupported) {
                                                                return (
                                                                    <button
                                                                        onClick={openChainModal}
                                                                        type="button"
                                                                    >
                                                                        Wrong network
                                                                    </button>
                                                                )
                                                            }

                                                            return (
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        gap: 12,
                                                                    }}
                                                                >
                                                                    <button
                                                                        onClick={openChainModal}
                                                                        style={{
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                        }}
                                                                        type="button"
                                                                    >
                                                                        {chain.hasIcon && (
                                                                            <div
                                                                                style={{
                                                                                    background:
                                                                                        chain.iconBackground,
                                                                                    width: 12,
                                                                                    height: 12,
                                                                                    borderRadius: 999,
                                                                                    overflow:
                                                                                        "hidden",
                                                                                    marginRight: 4,
                                                                                }}
                                                                            >
                                                                                {chain.iconUrl && (
                                                                                    <img
                                                                                        alt={
                                                                                            chain.name ??
                                                                                            "Chain icon"
                                                                                        }
                                                                                        src={
                                                                                            chain.iconUrl
                                                                                        }
                                                                                        style={{
                                                                                            width: 12,
                                                                                            height: 12,
                                                                                        }}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                        {chain.name}
                                                                    </button>

                                                                    <button
                                                                        onClick={openAccountModal}
                                                                        type="button"
                                                                    >
                                                                        {account.displayName}
                                                                        {account.displayBalance
                                                                            ? ` (${account.displayBalance})`
                                                                            : ""}
                                                                    </button>
                                                                </div>
                                                            )
                                                        })()}
                                                    </div>
                                                )
                                            }}
                                        </ConnectButton.Custom>
                                    </ButtonContainer>
                                </ElementContainer2>
                                <ControlPanelContainer
                                    key="cp1"
                                    initial={{ scale: 1, opacity: 0 }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 3,
                                        ease: "easeIn",
                                    }}
                                >
                                    <ControlPanel
                                        russo={russo.className}
                                        michroma={michroma.className}
                                    />
                                </ControlPanelContainer>
                                <ThinDivContainer
                                    key="td1"
                                    initial={{ x: 0, scale: 1, opacity: 0 }}
                                    animate={{
                                        x: 0,
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: 6,
                                        type: "spring",
                                    }}
                                >
                                    <img src={elements.dividerwhite5.src} />
                                </ThinDivContainer>
                            </ElementContainer>
                            {isShow && (
                                <WalletContainer
                                    key="td1"
                                    initial={{ y: 100, scale: 1, opacity: 0 }}
                                    animate={{
                                        y: 0,
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.2,
                                        type: "spring",
                                        bounce: 0.4,
                                        mass: 1,
                                    }}
                                >
                                    <Wallet>
                                        <div
                                            className="absolute top-3 right-6 z-[10] w-[2.5rem] h-[2rem] border-2 flex justify-center items-center rounded-md"
                                            onClick={() => setIsShow(!isShow)}
                                        >
                                            <BsDashLg size={20} />
                                        </div>
                                        <motion.div
                                            className="absolute w-full z-[0] opacity-10 flex justify-center items-center"
                                            animate={{
                                                rotateZ: [0, 4, 0, -4, 0],
                                                transition: {
                                                    duration: 12,
                                                    delay: 0.5,
                                                    type: "spring",
                                                    repeat: Infinity,
                                                },
                                            }}
                                        >
                                            <Image
                                                src={elements.customimg1.src}
                                                width={250}
                                                height={250}
                                            />
                                        </motion.div>
                                        {connectors.map((connector) => (
                                            <WalletButton
                                                disabled={!connector.ready}
                                                key={connector.id}
                                                onClick={() => connect({ connector })}
                                            >
                                                <ImgContainer>
                                                    {connector.name == "MetaMask" && (
                                                        <img src={iconlist[1]} />
                                                    )}
                                                    {connector.name == "WalletConnect" && (
                                                        <img src={iconlist[2]} />
                                                    )}
                                                    {connector.name == "Ledger" && (
                                                        <img src={iconlist[0]} />
                                                    )}
                                                </ImgContainer>
                                                <WalletName className={michroma.className}>
                                                    {connector.name}
                                                </WalletName>
                                                {!connector.ready && " (unsupported)"}
                                                {isLoading &&
                                                    connector.id === pendingConnector?.id &&
                                                    " (connecting)"}
                                            </WalletButton>
                                        ))}
                                    </Wallet>

                                    <ErrorMsg>{error && <div>{error.message}</div>}</ErrorMsg>
                                </WalletContainer>
                            )}
                        </SubSection>
                        <ThickDivContainer
                            key="tc2"
                            initial={{ y: 500, scale: 1, opacity: 0 }}
                            animate={{
                                y: 0,
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 2,
                                delay: 6,
                                type: "spring",
                                masss: 3,
                            }}
                        >
                            <ThickDiv1 />
                        </ThickDivContainer>
                        <SubSection2 id="about">
                            <SubHeader>
                                <TitleLayer1
                                    className={russo.className}
                                    key="slogan5"
                                    initial={{ x: "-100%", opacity: 0.5, scale: 1 }}
                                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeIn",
                                    }}
                                >
                                    <Title
                                        className={russo.className}
                                        key="slogan4"
                                        initial={{ opacity: 0, scale: 0.75 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{
                                            duration: 1,
                                            type: "spring",
                                            bounce: 0.3,
                                            masss: 0.25,
                                            delay: 0.5,
                                        }}
                                    >
                                        <TitleContainer>WHAT'S SIGNET?</TitleContainer>
                                    </Title>
                                </TitleLayer1>
                            </SubHeader>
                            <SloganContainer
                                className={michroma.className}
                                key="sloganbox1"
                                initial={{ opacity: 0, scale: 0.94 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.4,
                                }}
                            >
                                <TitleContainer2
                                    key="slogan1"
                                    initial={{ opacity: 0, scale: 0.94 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1.2,
                                    }}
                                >
                                    &ldquo; The Social Media Of The Future &rdquo;
                                </TitleContainer2>
                            </SloganContainer>
                            <SubBottom>
                                <ContainerContainer>
                                    <SubTitleContainer>
                                        <motion.div
                                            className="absolute w-full z-[0] opacity-40 flex justify-center items-center ml-4"
                                            animate={{
                                                rotateZ: [4, -6, 2, -6, 4],
                                                rotateY: [-6, 6, -6, 6, -6],
                                                rotateX: [-6, 6, -6, 6, -6],
                                                transition: {
                                                    duration: 15,
                                                    type: "spring",
                                                    repeat: Infinity,
                                                    mass: 2,
                                                },
                                            }}
                                        >
                                            <Image
                                                src={elements.customcomp3.src}
                                                width={240}
                                                height={240}
                                            />
                                        </motion.div>
                                        <Subtitle className={michroma.className}>
                                            Signet is a all-in-one web3 social media platform
                                            dedicated to bring you a secure, transparent, and
                                            intuitive social netowrking experience.
                                            <br />
                                            <br />
                                            Signet currently supports text and image content
                                            posting, profile picture authentication, instant crypto
                                            transfer. Share your ideas, meet new people, stay
                                            updated with your commiunity, and send crypto to anyone
                                            anywhere around the world.
                                            <br />
                                            <br />
                                            More features coming soon...
                                        </Subtitle>
                                    </SubTitleContainer>
                                </ContainerContainer>
                            </SubBottom>
                        </SubSection2>
                        <ThickDivContainer
                            key="tc3"
                            initial={{ y: 500, scale: 1, opacity: 0 }}
                            animate={{
                                y: 0,
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 2,
                                delay: 3,
                                type: "spring",
                                masss: 3,
                            }}
                        >
                            <ThickDiv1 />
                        </ThickDivContainer>
                        <SubSection2 id="feature">
                            <SubHeader>
                                <TitleLayer1
                                    key="slogan6"
                                    initial={{ x: "-100%", opacity: 0.5, scale: 1 }}
                                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeIn",
                                    }}
                                >
                                    <Title
                                        className={russo.className}
                                        key="slogan4"
                                        initial={{ opacity: 0, scale: 0.75 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{
                                            duration: 1,
                                            type: "spring",
                                            bounce: 0.3,
                                            masss: 0.25,
                                            delay: 0.6,
                                        }}
                                    >
                                        <TitleContainer>WHY SIGNET?</TitleContainer>
                                    </Title>
                                </TitleLayer1>
                            </SubHeader>
                            <SloganContainer2
                                className={michroma.className}
                                key="sloganbox2"
                                initial={{ opacity: 0, scale: 0.94 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.4,
                                }}
                            >
                                <TitleContainer2
                                    key="slogan2"
                                    initial={{ opacity: 0, scale: 0.94 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1.2,
                                    }}
                                >
                                    &ldquo; Secure, Transparent, Autonomous &rdquo;
                                </TitleContainer2>
                            </SloganContainer2>
                            <SubBottom>
                                <Container>
                                    <Subtitletitle className={russo.className}>
                                        Maximized Security
                                    </Subtitletitle>
                                    <SubContainer className={michroma.className}>
                                        <motion.div
                                            className="absolute w-full z-[0] opacity-80 flex justify-center items-center mb-5"
                                            animate={{
                                                rotateY: [-10, 10, -10, 10, -10],
                                                transition: {
                                                    duration: 12,
                                                    delay: 0.5,
                                                    type: "spring",
                                                    repeat: Infinity,
                                                },
                                            }}
                                        >
                                            <Image
                                                src={elements.customcomp2.src}
                                                width={300}
                                                height={300}
                                            />
                                        </motion.div>
                                        Signet implements blockchain infrastructure, which is one
                                        of the most secure IT infrastructure as its fundamental
                                        architecture. According to data, Signet accounts are 1000
                                        times less likely to be compromised compared our Web2
                                        counterparts.
                                    </SubContainer>
                                </Container>
                                <Container>
                                    <Subtitletitle className={russo.className}>
                                        Full Data Transparency
                                    </Subtitletitle>
                                    <SubContainer className={michroma.className}>
                                        <motion.div
                                            className="absolute w-full z-[0] opacity-80 flex justify-center items-center mb-5"
                                            animate={{
                                                rotateY: [-10, 10, -10, 10, -10],
                                                transition: {
                                                    duration: 12,
                                                    delay: 0.5,
                                                    type: "spring",
                                                    repeat: Infinity,
                                                },
                                            }}
                                        >
                                            <Image
                                                src={elements.customcomp2.src}
                                                width={300}
                                                height={300}
                                            />
                                        </motion.div>
                                        Data generated on Signet and our Smart Contracts are open
                                        to public on the Etherscan. Additionally, Signet also
                                        integrated IPFS decentralized storage system so that no one
                                        can access your data without permission, even Signet team
                                        members.
                                    </SubContainer>
                                </Container>
                                <Container>
                                    <Subtitletitle className={russo.className}>
                                        Outright Content Ownership
                                    </Subtitletitle>
                                    <SubContainer className={michroma.className}>
                                        <motion.div
                                            className="absolute w-full z-[0] opacity-80 flex justify-center items-center mb-5"
                                            animate={{
                                                rotateY: [-10, 10, -10, 10, -10],
                                                transition: {
                                                    duration: 8,
                                                    delay: 0.5,
                                                    type: "spring",
                                                    repeat: Infinity,
                                                },
                                            }}
                                        >
                                            <Image
                                                src={elements.customcomp2.src}
                                                width={300}
                                                height={300}
                                            />
                                        </motion.div>
                                        Signet uses Smart Contract and Ethereum ERC-721 Token
                                        Standard to achieve full ownership decentralization. Signet
                                        users will not only be able to like and star posts, but
                                        also trade their posts for monetary gains. Maximizing
                                        profitability for content creators.
                                    </SubContainer>
                                </Container>
                            </SubBottom>
                        </SubSection2>
                        <ThickDivContainer
                            key="tc4"
                            initial={{ y: 500, scale: 1, opacity: 0 }}
                            animate={{
                                y: 0,
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 2,
                                delay: 3,
                                type: "spring",
                                masss: 3,
                            }}
                        >
                            <ThickDiv1 />
                        </ThickDivContainer>
                        <SubSection2 id="roadmap">
                            <SubHeader>
                                <TitleLayer1
                                    key="slogan7"
                                    initial={{ x: "-100%", opacity: 0.5, scale: 1 }}
                                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeIn",
                                    }}
                                >
                                    <Title
                                        className={russo.className}
                                        key="slogan8"
                                        initial={{ opacity: 0, scale: 0.75 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false }}
                                        transition={{
                                            duration: 1,
                                            type: "spring",
                                            bounce: 0.3,
                                            masss: 0.25,
                                            delay: 0.6,
                                        }}
                                    >
                                        <TitleContainer>ROADMAP</TitleContainer>
                                    </Title>
                                </TitleLayer1>
                            </SubHeader>
                            <SloganContainer
                                className={michroma.className}
                                key="sloganbox3"
                                initial={{ opacity: 0, scale: 0.94 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.4,
                                }}
                            >
                                <TitleContainer2
                                    key="slogan9"
                                    initial={{ opacity: 0, scale: 0.94 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1.2,
                                    }}
                                >
                                    &ldquo; The Best Is Yet To Come &rdquo;
                                </TitleContainer2>
                            </SloganContainer>
                            <ContainerContainerContainer>
                                <Container3>
                                    <Subtitletitle7 className={russo.className}>
                                        BETA 1.0
                                    </Subtitletitle7>
                                    <Subtitletitle3 className={russo.className}>
                                        THE BASICS
                                    </Subtitletitle3>
                                    <SubContainer2 className={michroma.className}>
                                        <RoadMapText1>
                                            - Decentralized System Architecture <br />
                                            - Share Moments and Digital Creations <br />
                                            - Like and Comment on other's Posts <br />
                                        </RoadMapText1>
                                        <Subtitletitle2 className={russo.className}>
                                            THE ADVANCED
                                        </Subtitletitle2>
                                        <RoadMapText2>
                                            - Profile Picture Authencation <br /> (automatic upon
                                            wallet connection) <br />
                                            - Web3 Community Space <br /> (need to own at least one
                                            community NFT in order to gain access) <br />
                                            - Full Control Over All Your Content <br /> (trade
                                            Signets like any other NFTs) <br />
                                            - Send Crypto to Other Users <br /> (Send crypto to
                                            your friends anywhere in the world instantly)
                                            <br />
                                        </RoadMapText2>
                                    </SubContainer2>
                                </Container3>
                                <Container2>
                                    <SubContainer3 className={michroma.className}>
                                        <Subtitletitle4 className={russo.className}>
                                            BETA 2.0
                                        </Subtitletitle4>
                                        <RoadMapText3>
                                            - Android / IOS App deployment <br />
                                            - User to User Direct Message System <br />
                                            - June 2023 <br />
                                        </RoadMapText3>
                                        <Subtitletitle5 className={russo.className}>
                                            ALPHA 1.0
                                        </Subtitletitle5>
                                        <RoadMapText4>
                                            - User Stats Tracking System Installation <br />
                                            - Clone Server Implementation <br /> (will drastically
                                            boost app performance) <br />
                                            - September 2023 <br />
                                        </RoadMapText4>
                                        <Subtitletitle6 className={russo.className}>
                                            ALPHA 2.0
                                        </Subtitletitle6>
                                        <RoadMapText5>
                                            - Signet Digital Marketplace Launch
                                            <br />
                                            (where users can trade Signets and NFTs) - Feb 2024{" "}
                                            <br />
                                        </RoadMapText5>
                                    </SubContainer3>
                                </Container2>
                            </ContainerContainerContainer>
                        </SubSection2>
                        <ThickDivContainer
                            key="tc4"
                            initial={{ y: 500, scale: 1, opacity: 0 }}
                            animate={{
                                y: 0,
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 2,
                                delay: 3,
                                type: "spring",
                                masss: 3,
                            }}
                        >
                            <ThickDiv1 />
                        </ThickDivContainer>
                    </Info>
                    <LandingFooter russo={russo.className} michroma={michroma} />
                </Content>
            </Section>
        </SectionContainer>
    )
}
