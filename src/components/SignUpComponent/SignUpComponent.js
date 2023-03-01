import React, { useEffect, useState } from "react";
import "./SignUpComponent.css";
import "../ButtonComponent/ButtonComponent.css";


export const SignUpComponent = () => {
  const [signUpBtn, clickSignUpBtn] = useState(true);
  const [registerBtn, clickRegisterBtn] = useState(false);

   const handleClick = (e) => {
    e.preventDefault();
          clickSignUpBtn(!signUpBtn);
  };

  return (
    <div className="signUp-conteiner">
      <div className="signUp-main-form">
        <div className="signUp-btn-conteiner">
          {signUpBtn !== true ? (
            <button
              // className="btn"
              // btnStyle="btn-standart"
              // btnSize="btn-large"
              // path="/"
              // // onClick={openSignUpForm}
              onClick={handleClick}
            >
              Sign up
            </button>
          ) : (
            <button
              // className="btn"
              // btnStyle="btn-standart"
              // btnSize="btn-large"
              // path="/"
              // // onClick={openRegisterForm}
              onClick={handleClick}
            >
              Registration
            </button>
          )}
        </div>
        <div>
          {signUpBtn === true ? (
            <form className="formRegistrandSignUp">
              <h1>Sign Up</h1>
              <input
                className="formRegistr-input"
                placeholder="Email"
                type="email"
                // onChange={this.changeEmail.bind(this)}
                // value={this.state.email}
              ></input>
              <input
                className="formRegistr-input"
                placeholder="Password"
                type="password"
                // onChange={this.changeEmail.bind(this)}
                // value={this.state.email}
              ></input>
            </form>
          ) : (
            <form className="formRegistrandSignUp">
              <h1>Register now</h1>
              <input
                className="formRegistr-input"
                placeholder="First name"
                // onChange={this.changeFirstName.bind(this)}
                // value={this.state.firstName}
              ></input>
              {/* {this.state.wasClickedonsubmitBtn &&
          !this.state.validFirstName ? (
            <div className="infoMistake">Enter valid first name</div>
          ) : null} */}
              <input
                className="formRegistr-input"
                placeholder="Last name"
                // onChange={this.changeLastName.bind(this)}
                // value={this.state.lastName}
              ></input>
              {/* {this.state.wasClickedonsubmitBtn && !this.state.validLastName ? (
            <div className="infoMistake">Enter valid last name</div>
          ) : null} */}
              <input
                className="formRegistr-input"
                placeholder="Email"
                type="email"
                // onChange={this.changeEmail.bind(this)}
                // value={this.state.email}
              ></input>
              {/* {this.state.wasClickedonsubmitBtn && !this.state.validEmail ? (
            <div className="infoMistake">Enter valid email name</div>
          ) : null} */}
              {/* <ButtonComponent className="btn" btnStyle="btn-standart">
                {" "}
                Register
              </ButtonComponent> */}
              {/* // onClick={this.handleSubmit.bind(this)}
            // className="formRegistr-button .formRegistr-input"  */}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
