import React from "react"
import { BsSearch, BsArrowRight } from "react-icons/bs"
import styled from "styled-components"

const SearchBarComp = styled.div`
    width: 100%;
`

const SearchBarContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: rgba(32, 32, 32, 1);
    color: white;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);

    @media only screen and (min-width: 768px) {
        width: 80%;
    }
    @media only screen and (min-width: 1024px) {
        width: 80%;
    }
`

const Icon = styled.div`
    width: 1rem;
    height: 1rem;
    margin: 0.5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
`

const Input = styled.input`
    width: 100%;
    border: 0;
    outline: 0;
    padding-left: 1rem;
    background-color: transparent;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;

    font-size: 15px;
    padding: 0.5rem;

    &::placeholder {
        font-size: 15px;
    }

    @media only screen and (min-width: 1024px) {
        font-size: 15px;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;

        &::placeholder {
            font-size: 15px;
        }
    }
`

const SearchBar = () => {
    return (
        <SearchBarComp>
            <SearchBarContainer>
                <Icon>
                    <BsSearch />
                </Icon>
                <Input type="text" placeholder="Type your keyword..." />
                <Icon>
                    <BsArrowRight />
                </Icon>
            </SearchBarContainer>
        </SearchBarComp>
    )
}

export default SearchBar
