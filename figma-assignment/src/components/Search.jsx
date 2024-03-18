import React from 'react'
import styled from 'styled-components'
import plusSvg from "../assets/plus.svg";
import shopButtonSvg from "../assets/shopButton.svg"
const Search = () => {
    return (
        <SearchBox>
            <div>
                <img src={plusSvg} alt="PlusSign" />
                <input type="text" placeholder='Ask me anything...' />
                <button>
                    <img src={shopButtonSvg} alt="shopButtonSvg" />
                </button>
            </div>
        </SearchBox>
    )
}

export default Search
const SearchBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #161516;
    height: 58px;
    border-radius: 74px;
    border: 2px solid #474347;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-left: 20px;
    }
    button{
        border-radius: 31px;
    }
    input{
        border: none;
        background-color: #161516;
        width: 90%;
        outline: none;
        color: white;
    }

`