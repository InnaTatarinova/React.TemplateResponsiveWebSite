import React, { useState } from "react";
import "./SignUpComponent.css";
import "../ButtonComponent/ButtonComponent.css";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";

export const SignUpComponent = () => {
  const [signUpBtn, clickSignUpBtn] = useState(true);

  const handleClick = () => {
    clickSignUpBtn(!signUpBtn);
  };

  return (
    <div className="signUp-conteiner">
      <div className="signUp-main-form">
        <div className="signUp-btn-conteiner">
          {signUpBtn !== true ? (
            <ButtonComponent
              btnStyle="btn-standart"
              btnSize="btn-large"
              onClick={handleClick}
             
            >
              Sign up
            </ButtonComponent>
          ) : (
            <ButtonComponent
              btnStyle="btn-standart"
              btnSize="btn-large"
              onClick={handleClick}
            >
              Registration
            </ButtonComponent>
          )}
        </div>

        <div>
          {signUpBtn === true ? (
            <form className="formForData">
              <h1>Sign Up</h1>
              <input
                className="formRegistr-input"
                placeholder="Email"
                type="email"
                required
              ></input>
              <input
                className="formRegistr-input"
                placeholder="Password"
                type="password"
                required
              ></input>
              <div className="btn-submit">
                <ButtonComponent
                  btnStyle="btn-standart-black"
                  btnSize="btn-large"
                  btnForm= "btn-ellipse"
                  type="submit"
                >
                  Sign up
                </ButtonComponent>
              </div>
            </form>
          ) : (
            <form className="formForData">
              <h1>Register now</h1>
              <input
                className="formRegistr-input"
                placeholder="First name"
                required
              ></input>
              <input
                className="formRegistr-input"
                placeholder="Last name"
                required
              ></input>
              <input
                className="formRegistr-input"
                placeholder="Email"
                type="email"
                required
              ></input>
              <input
                className="formRegistr-input"
                placeholder="Password"
                type="password"
                required
              ></input>
              <div className="btn-submit">
                <ButtonComponent
                  btnStyle="btn-standart-black"
                  btnSize="btn-large"
                  btnForm= "btn-ellipse"
                  type="submit"
                >
                 Register
                </ButtonComponent>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
