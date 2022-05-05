import React from "react";
import {
  BorderJudul,
  BoxKanan,
  BoxKananDalam,
} from "../../styles/Login/StyleLogin";
import { FormLogin } from "../FormAuth/FormLogin";
import "../../styles/Form/FormLogin.css";

const BorderKanan = (props) => {
  const { linking } = props;
  
  return (
    <BoxKanan>
      <BoxKananDalam>
        <BorderJudul>
          <h2>
            Start Accessing Banking Needs With All Devices and All Platforms
            With 30.000+ Users
          </h2>
          <br />
          <p>
            Transfering money is eassier than ever, you can access Pay Pay
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
        </BorderJudul>
        <div>
          <div className="form-box">
            <FormLogin />
            <br />
            <br />
            <p className="form-subtext">
              Don't have an account? Lets
              <a className="signup" href="./signUp.html">
                {linking}
              </a>
            </p>
          </div>
        </div>
      </BoxKananDalam>
    </BoxKanan>
  );
};

export default BorderKanan;
