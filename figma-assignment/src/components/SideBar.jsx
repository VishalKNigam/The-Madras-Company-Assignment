import React from 'react';
import TopSvg from '../assets/top.svg'; // Importing the SVG file
import HomeSvg from "../assets/home.svg";
import SearchSvg from "../assets/search.svg";
import LinesSvg from "../assets/lines.svg";
import ForwardArrowSvg from "../assets/forwardArrow.svg";
import styled from "styled-components"
const SideBar = () => {
  return (
    <Container>
      {/* Using the imported SVG directly */}
      <div>
        <img src={TopSvg} alt="TopSvg" />

      </div>
      <div>
        <img src={HomeSvg} alt="HomeSvg" />

      </div>
      <div>
        <img src={SearchSvg} alt="SearchSvg" />

      </div>
      <div>
        <img src={LinesSvg} alt="LinesSvg" />

      </div>
      <div>
        <img src={ForwardArrowSvg} alt="ForwardArrowSvg" />

      </div>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  background-color: #141414;
  display: flex;
  flex-direction: column;
  width: 5%;
  padding: 2%;
  height: 100vh;
  align-items: center;
  div{
    padding: 10px 0;
    
  }
`
