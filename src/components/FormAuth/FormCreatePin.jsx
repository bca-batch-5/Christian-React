import React, { useEffect, useState } from "react";
import "../../styles/Form/ManipulationForm.css";
import "../../styles/Form/CreatePin.css";

const FormCreatePin = (props) => {
  const { pageValid, logoSuccess } = props;
  const [formDisplay, setFormDisplay] = useState("form-no-display");
  const [logoSuccessValid, setLogoSuccessValid] = useState();
  const [judul, setJudul] = useState("Your PIN Was Successfully Created");
  const [subJudul, setSubJudul] = useState(
    "Your PIN was successfully created and you can now access all the features in PayPay. Login to your new account and start exploring!"
  );
  const titleOne = document.getElementById(`titleOne`);
  const titleTwo = document.getElementById(`titleTwo`);
  const formBox = document.getElementById(`formBox`);
  const loginBtn = document.getElementById(`loginBtn`);
  const confirmBtn = document.getElementById(`btnConfirm`);
  const titleImage = document.getElementById(`titleImage`);
  const six = document.getElementById(`six`);

  useEffect(() => {
    if (pageValid == "create-pin") {
      setFormDisplay("form-display");
    }
  });

  function confirmButton(e) {
    e.preventDefault();
    // formBox.style.display = `none`;
    // loginBtn.style.display = `block`;
    setLogoSuccessValid("logo-success-valid");
    logoSuccess(logoSuccessValid, judul, subJudul);
  }

  // disable button\

  function sixInputHandler() {
    btnChange();
  }

  function btnChange() {
    // if (six.value == "") {
    //   confirmBtn.style.backgroundColor = "#A9A9A999";
    //   confirmBtn.style.color = "grey";
    // } else {
    confirmBtn.style.backgroundColor = `#6379F4`;
    confirmBtn.style.color = `white`;
    // }
  }

  function moveEvent(e) {
    console.log(e.target.value.length);
    if (e.target.value.length == 1) {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
    }
  }

  function pressHandler(e) {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  }

  return (
    <div className={formDisplay}>
      <div id="formBox">
        <form onSubmit={confirmButton}>
          <div className="pin-form">
            <input
              className="form-pin"
              type="text"
              maxlength="1"
              id="first"
              onKeyPress={pressHandler}
              onKeyUp={moveEvent}
            />
            <input
              className="form-pin"
              type="text"
              maxlength="1"
              id="sec"
              onKeyPress={pressHandler}
              onKeyUp={moveEvent}
            />
            <input
              className="form-pin"
              type="text"
              maxlength="1"
              id="third"
              onKeyPress={pressHandler}
              onKeyUp={moveEvent}
            />
            <input
              className="form-pin"
              type="text"
              maxlength="1"
              id="fourth"
              onKeyPress={pressHandler}
              onKeyUp={moveEvent}
            />
            <input
              className="form-pin"
              type="text"
              maxlength="1"
              id="fifth"
              onKeyPress={pressHandler}
              onKeyUp={moveEvent}
            />
            <input
              className="form-pin"
              type="text"
              maxlength="1"
              id="six"
              onInput={sixInputHandler}
              onkeypress=" return/[0-9]/i.test(event.key)"
            />
          </div>
          <button className="btnConfirm">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default FormCreatePin;
