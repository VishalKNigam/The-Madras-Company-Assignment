import React from 'react'
import styled from 'styled-components'
import Box from '../components/Box';
import starSvg from "../assets/star.svg";
import bulbSvg from "../assets/bulb.svg";
import kurtiSvg from "../assets/kurti.svg";

const Welcome = () => {
    return (
        <div>
            <FirstHeading>
                Hello, John
            </FirstHeading>
            <SecondHeading>
                How can I help you today?
            </SecondHeading>
            <BoxContainer>
                <Box content={"Trending smart watches 2024"} imageUrl={starSvg} />
                <Box content={"Portable vacuum cleaner"} imageUrl={bulbSvg}/>
                <Box content={"Kurti sets under 600"} imageUrl={kurtiSvg}/>
            </BoxContainer>
        </div>
    )
}

export default Welcome;
const FirstHeading = styled.div`
  /* background: linear-gradient( #000000 , #CE5ED5 ); */
  color: rgb(152,65,145);
  font-weight: 500;
  font-family: "Satoshi";
  font-size: 45px;
  padding-left: 129px;
`
const SecondHeading = styled.div`
  color: #828282;
  font-weight: 500;
  font-family: "Satoshi";
  font-size: 45px;
  padding-left: 129px;
`
const BoxContainer = styled.div`
    display: flex;
    margin-left: 110px;
    margin-top: 60px;
    

`