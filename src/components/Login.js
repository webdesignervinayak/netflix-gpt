import React, { useState, useRef } from 'react'
import Header from "./Header"
import { checkValidateData } from '../utlis/loginformValidation';

const Login = () => {

  const [signInForm,setSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

  const toggleSignInUp = () => {
    setSignInForm(!signInForm);
  }

  const email = useRef(null);
  const password = useRef(null);
  //const name = useRef(null);

  const handleClickButton = () => {

    const message = checkValidateData(email.current.value,password.current.value);

    setErrorMessage(message);

  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background-img"/>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 my-36 mx-auto right-0 left-0 w-3/12 bg-black  bg-opacity-80 rounded-lg text-white'>

        <h1 className='mx-2 my-4 font-semibold text-3xl'>{signInForm ? "Sign Up" : "Sign In"}</h1>

        { signInForm &&
          <input type="text"
        placeholder='User Name' 
        className='mx-2 my-4 p-4 w-full rounded-lg bg-gray-800'/>}

        <input type="text" ref={email}
         placeholder='Email or PhoneNumber' 
         className='mx-2 my-4 p-4 w-full rounded-lg bg-gray-800'/>

        <input 
         type="password" ref={password}
         placeholder='Password' 
         className='mx-2 my-4 p-4 w-full rounded-lg bg-gray-800'/>

        <p className='font-semibold text-red-800'>{errorMessage}</p>

        <button className='mx-2 my-8 p-4 bg-red-700 text-white font-bold w-full rounded-lg' onClick={handleClickButton} >{signInForm ? "Sign Up" : "Sign In"}</button>

        <p className='cursor-pointer hover:text-gray-400' onClick={toggleSignInUp}>{signInForm ? "Already Registered User ? Sign In here" :"New to Netflix? Sign Up Now"}</p>
      </form>
    </div>
  )
}

export default Login;