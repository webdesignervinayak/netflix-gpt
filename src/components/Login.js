import React, { useState, useRef } from 'react'
import Header from "./Header"
import { checkValidateData } from '../utlis/loginformValidation';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utlis/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utlis/userSlice';
import { BACKGROUND } from '../utlis/constants';


const Login = () => {
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signInForm,setSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClickButton = () => {

    const message = checkValidateData(email.current.value,password.current.value);

    setErrorMessage(message);

    if(message) return;

    if(!signInForm){

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          const {uid, email, displayName} = auth.currentUser;
          dispatch(addUser({uid : uid, email : email, displayName: displayName}));
          //navigate("/browse");
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErrorMessage(errorCode + "-" + errorMessage);
        // ..
      });

    }

    else {

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          //navigate("/browse");
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

  };

  const toggleSignInUp = () => {
    setSignInForm(!signInForm);
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src= {BACKGROUND}
        alt="background-img"/>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 my-36 mx-auto right-0 left-0 w-3/12 bg-black  bg-opacity-80 rounded-lg text-white'>

        <h1 className='mx-2 my-4 font-semibold text-3xl'>{signInForm ? "Sign In" : "Sign Up"}</h1>

        { !signInForm && (
          <input type="text" ref={name}
        placeholder='User Name' 
        className='mx-2 my-4 p-4 w-full rounded-lg bg-gray-800'/>)}

        <input type="text" ref={email}
         placeholder='Email or PhoneNumber' 
         className='mx-2 my-4 p-4 w-full rounded-lg bg-gray-800'/>

        <input 
         type="password" ref={password}
         placeholder='Password' 
         className='mx-2 my-4 p-4 w-full rounded-lg bg-gray-800'/>

        <p className='font-semibold text-red-800'>{errorMessage}</p>

        <button className='mx-2 my-8 p-4 bg-red-700 text-white font-bold w-full rounded-lg' onClick={handleClickButton} >{signInForm ? "Sign In" : "Sign Up"}</button>

        <p className='cursor-pointer hover:text-gray-400' onClick={toggleSignInUp}>{signInForm ? "New to Netflix? Sign Up Now" : "Already Registered User ? Sign In here" }</p>
      </form>
    </div>
  )
}

export default Login;