import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 40%;
  background-image: url("/images/hero-desktop.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;


  @media (max-width: 65em) {
    width: 100%;
  }
 
  @media (max-width: 44em) {
    background-image: url("/images/hero-mobile.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    width: 100%;
 
  }
  @media (max-width: 34em) {
    width: 100%;
  }
`;

export default function Imgcard() {
  return (
    <ImageWrapper>
      {/* <img src="/images/hero-desktop.jpg" alt="heroG" /> */}
    </ImageWrapper>
  );
}
