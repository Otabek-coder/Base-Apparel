import React from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Imgcard from "./components/ImgCard";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 44em) {
    flex-direction: column;
    flex-direction: column-reverse;
    height: auto;

    
  }
`;

function App() {
  return (
    <Wrapper>
      <Main />
      <Imgcard />
    </Wrapper>
  );
}

export default App;
