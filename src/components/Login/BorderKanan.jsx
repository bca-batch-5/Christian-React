import React, { useEffect, useState } from "react";
import {
  BorderJudul,
  BoxKanan,
  BoxKananDalam,
} from "../../styles/Login/StyleLogin";
import { FormLogin } from "../FormAuth/FormLogin";
import { FormSignUp } from "../FormAuth/FormSignUp";
import "../../styles/Form/FormLogin.css";
import { Link } from "react-router-dom";

const BorderKanan = (props) => {
  const { linking, linkPage, judul,subJudul, page} = props;
  const [formValidation, setFormValidation] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [linkDisplay, setLinkDisplay] = useState();
  console.log(linkPage);

  useEffect(() => {
    // page berada di signUp
    if (linkPage == "/") {
      setFormValidation(false);
    } else if (linkPage == "/signup") {
      // page berada di login
      setFormValidation(true);
    } 
    setCurrentPage(page);
    // menghilangkan pilihan untuk login atau signup
    if(currentPage == "create-pin"){
      setLinkDisplay("form-valid");
    }
  });

  return (
    <BoxKanan>
      <BoxKananDalam>
        <BorderJudul>
          <h2>
           {judul}
          </h2>
          <br />
          <p>
            {subJudul}
          </p>
        </BorderJudul>
        <div>
          <div className="form-box">
            <FormLogin formValid={formValidation} pageValid={currentPage}/>
            <FormSignUp formValid={formValidation} pageValid={currentPage}/>
            <br />
            <br />
            <p className={`form-subtext ${linkDisplay}`}>
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
