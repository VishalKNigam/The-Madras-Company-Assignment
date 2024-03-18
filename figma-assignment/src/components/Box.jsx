import React from 'react'
import styled from 'styled-components';

const Box = ({ content, imageUrl }) => {
    return (
        <BoxContainer>
            <div>
                {content}
            </div>
            <div>
                <img src={imageUrl} alt="brokenImage" />
            </div>
        </BoxContainer>
    )
}

export default Box;
const BoxContainer = styled.div`
    padding: 30px;
    background-color: #292929;
    color: #EDEDED;
    border-radius: 22.09px;
    margin: 20px;
    width: 100%;
    height: 125px;
    font-size: 25px;
    div:nth-child(2){
        position: sticky;
        top: 100%;
        left: 100%;
        padding: 15px;
        background-color: #170B1C;
        width: 20px;
        height: 20px;
        border-radius: 100%;
    }
`