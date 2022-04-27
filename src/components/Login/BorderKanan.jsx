import React from "react";

const BorderKanan = () => {
  return (
    <div>
      <div>
        <div>
          <div>
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
          </div>
          <div>
            <div>
              <form>
                <input
                  class="form"
                  id="email"
                  type="email"
                  placeholder="enter your e-mail"
                />
                <i id="envelope" className="fa fa-envelope"></i>
              </form>
              <br />
              <br />
              <br />
              <div>
                <input
                  class="form"
                  id="password"
                  type="password"
                  placeholder="enter your password"
                />
                <i id="lock" className="fa fa-lock"></i>
                <button type="button" id="btnEye">
                  <i id="iconBtn" className="fa fa-eye-slash"></i>
                </button>
              </div>
              <br />
              <br />
              <a href="./forgetPass.html">Forgot password?</a>
              <br />
              <br />
              <p id="alert">Email or Password Invalid</p>
              <a id="aHref" href="home.html">
                <button id="btnLogin" onclick="validationEmail()">
                  Login
                </button>
              </a>
              <br />
              <br />
              <p>
                Don't have an account? Lets
                <a href="./signUp.html">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorderKanan;
