import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Imgcard from "./components/ImgCard";
import HeaderMobile from "./components/module/HeaderMobile";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;
const Container = styled.div``;
function App() {
  const [width, setWidth] = useState(
    () => typeof window !== "undefined" && window.innerWidth
  );
  useEffect(() => {
    function watchWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return (
    <Container>
      {width < 960 && <HeaderMobile />}
      <Wrapper>
        <Main />
        <Imgcard />
      </Wrapper>
    </Container>
  );
}

export default App;
