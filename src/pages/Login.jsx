import React from 'react'
import BorderKanan from '../components/Login/BorderKanan';
import BorderKiri from '../components/Login/BorderKiri';
import "../styles/Login/CssLogin.css";

const LandingPage = () => {
  return (
    <div className='border-auth'>
        <BorderKiri></BorderKiri>
        <BorderKanan linking=" SignUp" linkPage="/signup"></BorderKanan>
    </div>
  )
}

export default LandingPage;