import React, { useState, useEffect } from "react";
import { InputConatainer, MainContainer, MainWrapper } from "./MainStyle";
import Header from "./module/Header";
  /* eslint-disable no-useless-escape */

let emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Main() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
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
  let handleChange = (e) => {
    setEmail(e.target.value);
  
  };
  function handleSubmit(event) {
    event.preventDefault();
    if (emailRegex.test(email)) {
      setState("success");
      // error
    } else {
      // alert("Invalid email");
      setState("error");
    }
  }
  return (
    <MainWrapper>
      { width > 960 && <Header />}
      <MainContainer>
        <h1 className="title">
          <span>WE'RE</span> COMING <br></br>SOON
        </h1>
        <p className="text">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals
        </p>
        <InputConatainer>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {state === "error" && (
              <img src="/images/icon-error.svg" alt="" className="icon-error" />
            )}
            <button type="submit">
              <img
                className="error-icon"
                src="/images/icon-arrow.svg"
                alt="error"
              />
            </button>
          </form>
        </InputConatainer>
        {state === "success" && (
          <p className="success-text">Email sign up is successful</p>
        )}
        {state === "error" && (
          <p className="error-text">Please provide a valid email</p>
        )}
      </MainContainer>
    </MainWrapper>
  );
}
