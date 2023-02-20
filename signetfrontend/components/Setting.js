import React from "react"
import styled from "styled-components"
import { RiArrowDropDownLine, RiArrowDropUpLine, RiSettings2Line } from "react-icons/ri"
import { RxExit } from "react-icons/rx"
import { motion, AnimatePresence } from "framer-motion"

const Section = styled.div`
    width: 100vw;
    overflow: hidden;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1000;
`

const Sidebar = styled(motion.div)`
    width: 80%;
    overflow: hidden;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
background-color: rgba(39, 32, 56, 1);
    backdrop-filter: blur(18px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1000;

    @media only screen and (min-width: 1024px) {
        width: 100%;
    }
`

const Menu = styled.ul`
    color: white;
    display: grid;
`

const MenuItem = styled.li`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    list-style-type: square;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 10px;
    transition: background 0.3s;

    &:hover {
        transform: scale(1.1);
        background-color: rgba(64, 64, 64, 1);
    }

    &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: white;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.6s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`

const TopNav = styled.nav`
    width: 100%;
    max-width: 1920px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    backdrop-filter: blur(25px);
    position: fixed;
    top: 0;
    z-index: 100;
`

const TopRight = styled.div`
    width: 33%;
    display: flex;
    justify-content: right;
    align-items: center;
`

const OnSignal = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.14rem solid white;
    background-color: green;
    margin-right: 0.75rem;
`

const NameContainer = styled.span`
    font-size: 12px;
    font-weight: 400;
    margin-left: 0.5rem;
`

const Setting = ({ openSetting, setOpenSetting, Pfp, Name }) => {
    const OpenEditingMenu = () => {
        setOpenSetting(!openSetting)
    }
    return (
        <Section>
            <Sidebar
                key="box2"
                initial={{ x: "100%", opacity: 1, scale: 1 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{
                    x: "100%",
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.15, ease: "easeOut" },
                }}
                transition={{ duration: 0.25, ease: "easeIn" }}
            >
                <TopNav>
                    <a className="flex justify-left align-center items-center cursor-pointer">
                        <img src={Pfp} className="w-8 h-8 rounded-full" />
                        <NameContainer>{Name}</NameContainer>
                    </a>
                    <TopRight>
                        <OnSignal />
                        <button onClick={OpenEditingMenu}>
                            <RxExit color="white" size={24} />
                        </button>
                    </TopRight>
                </TopNav>
                <Menu>
                    <MenuItem>Recent Activity</MenuItem>
                    <MenuItem>Liked Post</MenuItem>
                    <MenuItem>Starred Post</MenuItem>
                    <MenuItem>Privacy Setting</MenuItem>
                    <MenuItem>Achivements</MenuItem>
                    <MenuItem>Disconnect</MenuItem>
                </Menu>
            </Sidebar>
        </Section>
    )
}

export default Setting
