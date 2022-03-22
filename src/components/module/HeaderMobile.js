import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 2em  0em 2em 2em;
  align-items: center;
  
 
`;

export default function HeaderMobile() {
  return (
    <Container>
      <div className="imgContainer">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
    </Container>
  );
}
