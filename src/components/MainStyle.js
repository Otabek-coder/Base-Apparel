import styled from "styled-components";

export const MainWrapper = styled.div`
  background-image: url("/images/bg-pattern-desktop.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0em 13em 10em 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  @media (max-width: 65em) {
    padding: 0em 10em 8em 8em;
  }
  @media (max-width: 50em) {
    padding: 0em 5em 8em 5em;
    width: 60%;
  }
  @media (max-width: 44em) {
    width: 100%;
  }
  @media (max-width: 28em) {
    padding: 0em 4em 5em 3em;
  }
`;
export  const MainContainer = styled.div`
  .title {
    font-size: 4.2rem;
    letter-spacing: 0.3em;
    font-weight: 600;
    @media (max-width: 75em) {
      font-size: 4rem;
    }
    @media (max-width: 65em) {
      font-size: 3.2rem;
    }

    @media (max-width: 28em) {
      font-size: 2.8rem;
    }
  }
  span {
    display: block;
    font-weight: 300;
    color: hsl(0, 36%, 70%);
  }
  .text {
    text-align: left;
    color: hsl(0, 36%, 70%);
    line-height: 1.6;
    margin: 2em 0em;
  }
  .error-text {
    margin: 1em 1.8em;
    color: hsl(0, 74%, 74%);
  }
`;

export const InputConatainer = styled.div`
  position: relative;

  input {
    padding: 1.3em 2em;
    width: 100%;
    border-radius: 25px;
    border: 0.9px solid hsl(0, 36%, 70%);
    outline: none;
  }

  input::placeholder {
    color: hsl(0, 80%, 86%);
    font-size: 1rem;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1.1em 3em;
    border-radius: 25px;
    border: 0;
    background-color: hsl(0, 74%, 74%);
    transition: all 0.2s ease-in;
  }
  button:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: hsl(0, 80%, 86%) 0px 20px 30px -10px;
    background-color: hsl(0, 80%, 86%);
  }
  .icon-error {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 65em) {
    input {
      padding: 1em 2em;
    }
    button {
      padding: 0.8em 2em;
    }
    .icon-error {
      left: 67%;
    }
  }
  @media (max-width: 50em) {
    input {
      padding: 1em 2em;
    }
    button {
      padding: 0.8em 2em;
    }
    .icon-error {
      left: 67%;
    }
  }
  @media (max-width: 35em) {
    input {
      padding: 1em 2em;
    }
    button {
      padding: 0.8em 2em;
    }
    .icon-error {
      left: 65%;
    }
  }
  @media (max-width: 28em) {
    input {
      width: 100%;
      padding: 1em 3em;
    }
    button {
      padding: 0.8em 2em;
    }
    .icon-error {
      left: 65%;
    }
  }
`;