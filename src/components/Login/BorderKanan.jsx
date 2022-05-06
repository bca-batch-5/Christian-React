import React, { useEffect, useState } from "react";
import {
  BorderJudul,
  BoxKanan,
  BoxKananDalam,
} from "../../styles/Login/StyleLogin";
import { FormLogin } from "../FormAuth/FormLogin";
import "../../styles/Form/FormLogin.css";
import { Link } from "react-router-dom";

const BorderKanan = (props) => {
  const { linking, linkPage} = props;
  const [formValidation, setFormValidation] = useState(true);
  console.log(linkPage);

  useEffect(() => {
    if(linkPage == "/"){
      setFormValidation(false);
    }
  }, []);

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
            <FormLogin formValid={formValidation}/>
            <br />
            <br />
            <p className="form-subtext">
              Don't have an account? Lets
              <Link className="signup" to={linkPage}>
                {linking}
              </Link>
            </p>
          </div>
        </div>
      </BoxKananDalam>
    </BoxKanan>
  );
};

export default BorderKanan;
