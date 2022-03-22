import React from "react";
import styled from "styled-components";


const ImageWrapper = styled.div`
  width: 40%;
  background-image: url("/images/hero-desktop.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
 
  @media (max-width: 60em) {
    background-image: url("/images/hero-mobile.jpg");
    background-repeat: no-repeat;
    width: 100%;
    height: 50vh;
  }
  @media (max-width: 525px) {
    background-size: contain;
    height: 350px;
  }
  
`;

export default function Imgcard() {
  return (
  
    <ImageWrapper>
      {/* <img src="/images/hero-desktop.jpg" alt="heroG" /> */}
    </ImageWrapper>
  
  );
}
