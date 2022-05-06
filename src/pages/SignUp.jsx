import React from 'react'
import BorderKanan from '../components/Login/BorderKanan';
import BorderKiri from '../components/Login/BorderKiri';

const SignUp = () => {
  return (
    <div className='border-auth'>
        <BorderKiri></BorderKiri>
        <BorderKanan linking=" Login" linkPage="/"></BorderKanan>
    </div>
  )
}

export default SignUp;