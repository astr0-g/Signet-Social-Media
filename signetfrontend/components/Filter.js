import React, { useState, useEffect } from "react"
import {
    FaFilter,
    FaAngleDown,
    FaAngleUp,
    FaWallet,
    FaMusic,
    FaVideo,
    FaImages,
    FaUserAlt,
} from "react-icons/fa"
import { AiFillCloseCircle } from "react-icons/ai"
import { MdVerified } from "react-icons/md"
import { TiTick } from "react-icons/ti"
import styled from "styled-components"
import SearchBar from "./SearchBar"
import { useBetween } from "use-between"
const FilterSection = styled.div`
    max-width: 1920px;
    padding-top: 0.75rem;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    @media only screen and (mix-width: 768px) {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

const ShadowBox = styled.div`
    width: 90%;
    height: 3rem;
    background-color: rgba(32, 32, 32, 0.5);
    position: absolute;
    z-index: 1;
`

const Filter_box = styled.div`
    width: 60%;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(32, 32, 32, 0.75);
    padding: 1rem 1rem;
    border-radius: 10px;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);

    @media only screen and (max-width: 376px) {
        width: 94%;
        display: flex;
        justify-content: center;
        gap: 0;
    }
    @media screen and (min-device-width: 377px) and (max-device-width: 425px) {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        width: 94%;
    }
    @media screen and (min-device-width: 426px) and (max-device-width: 786px) {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        width: 94%;
    }
`

const Filter_box_left = styled.div`
    display: flex;
    gap: 0.75rem;

    @media only screen and (max-width: 376px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }
    @media screen and (min-device-width: 377px) and (max-device-width: 425px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-device-width: 426px) and (max-device-width: 786px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`

const Button = styled.div`
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    background-color: rgba(32, 32, 32, 0.75);
    color: white;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: white;
        box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    }
`

const Button2 = styled.div`
    border: 1px solid white;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    transition: all 0.3s ease-in;
    cursor: pointer;
    background-color: rgba(32, 32, 32, 0.75);
    color: white;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    }
`

const Filter_box_right_box = styled.div`
    padding: 0.5rem 1rem;
    border-radius: 10px;
    color: white;
    background-color: rgba(32, 32, 32, 0.75);
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;

    @media screen and (max-device-width: 786px) {
        display: none;
    }
`

const Filter_box_right_box_pc = styled.div`
    padding: 0.9rem 0.75rem;
    border-radius: 10px;
    color: white;
    background-color: rgba(32, 32, 32, 0.75);
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
    gap: 0.25rem;

    @media only screen and (min-width: 786px) {
        display: none;
    }
`

const Filter_box_items = styled.div`
    width: 60%;
    margin: 0 auto;
    display: grid;
    border-radius: 10px;

    @media only screen and (max-width: 376px) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (min-device-width: 377px) and (max-device-width: 425px) {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (min-device-width: 426px) and (max-device-width: 786px) {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }
`

const Filter_box_items2 = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid rgba(43, 22, 68, 1);
    background-color: rgba(32, 32, 32, 0.75);
    border-radius: 10px;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);

    @media only screen and (max-width: 376px) {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-device-width: 377px) and (max-device-width: 425px) {
        display: grid;
        width: 90%;
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-device-width: 426px) and (max-device-width: 786px) {
        display: grid;
        width: 90%;
        grid-template-columns: repeat(2, 1fr);
    }
`

const Filter_box_items_box = styled.div`
    padding: 0.75rem 1rem;
`

const Filter_box_items_box_item = styled.div`
    background-color: rgba(32, 32, 32, 0.75);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    color: white;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media only screen and (max-width: 376px) {
        justify-content: space-between;
    }
    @media screen and (min-device-width: 377px) and (max-device-width: 425px) {
        justify-content: space-between;
    }
    @media screen and (min-device-width: 426px) and (max-device-width: 786px) {
        justify-content: space-between;
    }
`

const Filter_box_items_box_item_trans = styled.div`
    background-color: rgba(32, 32, 32, 0.75);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    cursor: pointer;

    display: flex;
    align-items: center;

    @media only screen and (max-width: 376px) {
        justify-content: space-between;
    }
    @media screen and (min-device-width: 377px) and (max-device-width: 425px) {
        justify-content: space-between;
    }
    @media screen and (min-device-width: 426px) and (max-device-width: 786px) {
        justify-content: space-between;
    }
`

const Bottom = styled.div`
    width: 100%;
    display: grid;
    justify-content: start;
    align-items: center;
`
const useShareableState = () => {
    const [viewtype, setviewtype] = useState("all")
    const [timeago, settime] = useState("100")
    return {
        viewtype,
        setviewtype,
        timeago,
        settime,
    }
}
const Filter = ({ viewtype, setviewtype, timeago, settime, Refresh }) => {
    const [filter, setFilter] = useState(true)
    const [mostStarDisplay, setMostStarDisplay] = useState(false)
    const [mostLikeDisplay, setMostLikeDisplay] = useState(false)
    const [mostViewDisplay, setMostViewDisplay] = useState(false)
    const [mostRecentDisplay, setMostSRecentDisplay] = useState(true)
    const [weekly, setWeekly] = useState(false)
    const [monthly, setMonthly] = useState(false)
    const [yearly, setYearly] = useState(false)
    const [allTime, setAllTime] = useState(true)

    //FUNCTION SECTION
    const openFilter = () => {
        if (!filter) {
            setFilter(true)
        } else {
            setFilter(false)
        }
    }

    async function setviewtypehere(e) {
        await setviewtype(e)
    }
    async function settimehere(e) {
        await settime(e)
    }

    const DisplayMS = async () => {
        await setviewtypehere("moststarsall")
        setMostLikeDisplay(false)
        setMostSRecentDisplay(false)
        setMostViewDisplay(false)
        setMostStarDisplay(true)
    }

    const DisplayML = async () => {
        await setviewtypehere("mostlikesall")
        setMostLikeDisplay(true)
        setMostSRecentDisplay(false)
        setMostViewDisplay(false)
        setMostStarDisplay(false)
    }
    const DisplayMV = async () => {
        await setviewtypehere("mostviewsall")
        setMostLikeDisplay(false)
        setMostStarDisplay(false)
        setMostSRecentDisplay(false)
        setMostViewDisplay(true)
    }
    const DisplayMR = async () => {
        await setviewtypehere("all")
        setMostLikeDisplay(false)
        setMostStarDisplay(false)
        setMostViewDisplay(false)
        setMostSRecentDisplay(true)
    }

    const DisplayWeekly = async () => {
        await settimehere("7")
        setWeekly(true)
        setMonthly(false)
        setYearly(false)
        setAllTime(false)
    }

    const DisplayMonthly = async () => {
        await settimehere("30")
        setWeekly(false)
        setMonthly(true)
        setYearly(false)
        setAllTime(false)
    }

    const DisplayYearly = async () => {
        await settimehere("365")
        setWeekly(false)
        setMonthly(false)
        setYearly(true)
        setAllTime(false)
    }

    const DisplayAllTime = async () => {
        await settimehere("1000")
        setWeekly(false)
        setMonthly(false)
        setYearly(false)
        setAllTime(true)
    }

    return (
        <FilterSection>
            <Filter_box>
                <SearchBar />
                <Filter_box_right_box onClick={() => openFilter()}>
                    <FaFilter color="white" size={16} />
                    <span>Filter</span>{" "}
                    {filter ? (
                        <FaAngleDown color="white" size={12} />
                    ) : (
                        <FaAngleUp color="white" size={12} />
                    )}
                </Filter_box_right_box>
                <Filter_box_right_box_pc onClick={() => openFilter()}>
                    <FaFilter color="white" size={16} />
                    {filter ? (
                        <FaAngleDown color="white" size={12} />
                    ) : (
                        <FaAngleUp color="white" size={12} />
                    )}
                </Filter_box_right_box_pc>
            </Filter_box>

            {!filter && (
                <Filter_box_items>
                    <Filter_box_items2>
                        <Filter_box_items_box>
                            {mostStarDisplay ? (
                                <Button2 onClick={() => DisplayMS()}>Most Stars</Button2>
                            ) : (
                                <Button onClick={() => DisplayMS()}>Most Stars</Button>
                            )}
                        </Filter_box_items_box>
                        <Filter_box_items_box>
                            {mostLikeDisplay ? (
                                <Button2 onClick={() => DisplayML()}>Most Likes</Button2>
                            ) : (
                                <Button onClick={() => DisplayML()}>Most Likes</Button>
                            )}
                        </Filter_box_items_box>
                        <Filter_box_items_box>
                            {mostViewDisplay ? (
                                <Button2 onClick={() => DisplayMV()}>Most Views</Button2>
                            ) : (
                                <Button onClick={() => DisplayMV()}>Most Views</Button>
                            )}
                        </Filter_box_items_box>
                        <Filter_box_items_box>
                            {mostRecentDisplay ? (
                                <Button2 onClick={() => DisplayMR()}>Most Recent</Button2>
                            ) : (
                                <Button onClick={() => DisplayMR()}>Most Recent</Button>
                            )}
                        </Filter_box_items_box>
                    </Filter_box_items2>
                    <Filter_box_items2>
                        <Filter_box_items_box>
                            {weekly ? (
                                <Button2 onClick={() => DisplayWeekly()}>Weekly</Button2>
                            ) : (
                                <Button onClick={() => DisplayWeekly()}>Weekly</Button>
                            )}
                        </Filter_box_items_box>
                        <Filter_box_items_box>
                            {monthly ? (
                                <Button2 onClick={() => DisplayMonthly()}>Monthly</Button2>
                            ) : (
                                <Button onClick={() => DisplayMonthly()}>Monthly</Button>
                            )}
                        </Filter_box_items_box>

                        <Filter_box_items_box>
                            {yearly ? (
                                <Button2 onClick={() => DisplayYearly()}>Yearly</Button2>
                            ) : (
                                <Button onClick={() => DisplayYearly()}>Yearly</Button>
                            )}
                        </Filter_box_items_box>

                        <Filter_box_items_box>
                            {allTime ? (
                                <Button2 onClick={() => DisplayAllTime()}>All Time</Button2>
                            ) : (
                                <Button onClick={() => DisplayAllTime()}>All Time</Button>
                            )}
                        </Filter_box_items_box>
                    </Filter_box_items2>
                </Filter_box_items>
            )}
        </FilterSection>
    )
}

export default Filter
