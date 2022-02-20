import React, { useState } from "react";
import { InputConatainer, MainContainer, MainWrapper } from "./MainStyle";
import Header from "./module/Header";

export default function Main() {
  const [email, setEmail] = useState({ email: "" });

  let handleChange = (e) => {
    const { value, name } = e.target;

    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(value)) {
      setEmail({ [name]: value });
      alert("provided valid email");
    } else {
      alert("provide valid email?");
    }
  };
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <MainWrapper>
      <Header />
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
              type="email"
              placeholder="Email Address"
              name="email"
              value={email.email}
              onChange={handleChange}
            />
            <img src="/images/icon-error.svg" alt="" className="icon-error" />
            <button type="submit">
              <img
                className="error-icon"
                src="/images/icon-arrow.svg"
                alt="error"
              />
            </button>
          </form>
        </InputConatainer>
        <p className="error-text">Please provide a valid email</p>
      </MainContainer>
    </MainWrapper>
  );
}
