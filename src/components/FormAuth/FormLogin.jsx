import React, { useEffect, useState } from "react";
import "../../styles/Form/FormLogin.css";
import { BorderInput } from "./FormLoginStyle";
import "../../styles/Form/ManipulationFormLogin.css";

export const FormLogin = (props) => {
  const{formValid} = props;
  const[formDisplay, setFromDisplay] = useState();
  const [iconClassEmail, setIconClassEmail] = useState();
  const [iconClassPass, setIconClassPass] = useState();
  const [inputValidEmail, setInputValidEmail] = useState();
  const [inputValidPass, setInputValidPass] = useState();
  const [btnEyes, setBtnEyes] = useState();
  const [passType, setPassType] = useState("password");
  const email = document.getElementById("email");
  const icon = document.getElementById("envelope");
  const pass = document.getElementById("password");
  const lock = document.getElementById("lock");
  const btnEye = document.getElementById("btnEye");
  const alertId = document.getElementById("alert");
  const btnLogin = document.getElementById("btnLogin");
  const aHref = document.getElementById("aHref");

  useEffect(() => {
    console.log(formValid);
    if(formValid == false){
      setFromDisplay("form-valid");
    }
  });

  function inputHandlerEmail(e) {
    if (e.target.value === "") {
      setIconClassEmail("icon-gray");
      setInputValidEmail("input-empty");
    } else {
      setIconClassEmail("icon-blue");
      setInputValidEmail("input-valid");
    }
    btnChange();
  }

  function inputHandlerPass(e) {
    if (e.target.value == "") {
      setIconClassPass("icon-gray");
      setInputValidPass("input-empty");
      setBtnEyes("btn-eyes-gray");
    } else {
      setIconClassPass("icon-blue");
      setInputValidPass("input-valid");
      setBtnEyes("btn-eyes-blue");
    }
    btnChange();
  }

  function buttonEyes(e) {

    if (passType == "password") {
      setPassType("text");
    } else {
      setPassType("password");
    }
    const iconBtn = document.getElementById(`iconBtn`);
    if (e.target.classList.contains(`fa-eye-slash`)) {
      iconBtn.classList.add(`fa-eye`);
      iconBtn.classList.remove(`fa-eye-slash`);
    } else {
      iconBtn.classList.add(`fa-eye-slash`);
      iconBtn.classList.remove(`fa-eye`);
    }
  }

  function validationEmail(e) {
    let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(format)) {
      aHref.href = "#";
      return true;
    } else {
      e.preventDefault();
      icon.style.color = `red`;
      email.style.borderBottomColor = `red`;
      lock.style.color = `red`;
      pass.style.borderBottomColor = `red`;
      btnEye.style.color = `red`;
      alertId.style.display = `block`;
    }
  }

  function btnChange() {
    if (pass.value == "" || email.value == "") {
      btnLogin.style.backgroundColor = "#A9A9A999";
      btnLogin.style.color = "grey";
      alertId.style.display = `none`;
    } else {
      btnLogin.style.backgroundColor = `#6379F4`;
      btnLogin.style.color = `white`;
    }
  }
  
  return (
    <div className={formDisplay}>
      <form>
        <BorderInput className={inputValidEmail}>
          <i id="envelope" className={`fa fa-envelope ${iconClassEmail}`}></i>
          <input
            className={`form`}
            id="email"
            type="text"
            placeholder="enter your e-mail"
            onChange={inputHandlerEmail}
          />
        </BorderInput>
        <br />
        <br />
        <br />
        <BorderInput className={inputValidPass}>
          <i id="lock" className={`fa fa-lock ${iconClassPass}`}></i>
          <input
            className="form"
            id="password"
            type={passType}
            placeholder="enter your password"
            onInput={inputHandlerPass}
          />
          <button
            type="button"
            id="btnEye"
            className="buttonEye"
           
          >
            <i id="iconBtn" className={`fa fa-eye-slash ${btnEyes}`}  onClick={buttonEyes}></i>
          </button>
        </BorderInput>
        <br />
        <br />
        <a className="forgot-pass" href="#">
          Forgot password?
        </a>
        <br />
        <br />
        <p id="alert" className="WrongPassword">
          Email or Password Invalid
        </p>
        <a id="aHref" href="#">
          <button id="btnLogin" className="btn-Login" onClick={validationEmail}>
            Login
          </button>
        </a>
      </form>
    </div>
  );
};
