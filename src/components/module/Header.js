import React from "react";
import styled from "styled-components";

const Head = styled.div`
  display: flex;
  margin: 6em  0em 8em 0em;
  align-items: center;
  @media(max-width:75em){
    margin: 6em  0em 4em 0em;
  }
  @media(max-width:65em){
    margin: 6em  0em 2em 0em;
  }
`;

export default function Header() {
  return (
    <Head>
      <div className="imgContainer">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
    </Head>
  );
}
