import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
  };
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [errMsg, setErrMsg] = useState(null);

  const handleButtonClick = () => {
    // Add null checks before accessing the value property
    const fullNameValue = fullname.current ? fullname.current.value : "";
    const emailValue = email.current ? email.current.value : "";
    const passwordValue = password.current ? password.current.value : "";

    const message = validateForm(
      fullNameValue,
      emailValue,
      passwordValue,
      isSigninForm
    );
    console.log(message);
    setErrMsg(message);
    if (message) return;
    //Sign in & sign up logic

    if (!isSigninForm) {
      //Sign up
      console.log("Sign up");
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrMsg(errorCode + " " + errorMessage);
        });
    } else {
      //Sign in
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user+" signed in");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundimg"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 p-12 absolute bg-black my-40 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-lg "
      >
        <h1 className="font-bold text-3xl py-4 w-full bg-opacity-85 rounded-lg">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSigninForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-opacity-85 rounded-lg  bg-gray-700 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-opacity-85 rounded-lg  bg-gray-700 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-opacity-85 rounded-lg  bg-gray-700"
        />
        <p className="text-sm my-4 w-full text-red-600">{errMsg}</p>
        <button
          type="submit"
          className="p-4 my-4 bg-red-700 w-full rounded-lg "
          onClick={handleButtonClick}
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-sm py-4 my-4 cursor-pointer "
          onClick={toggleSigninForm}
        >
          {isSigninForm
            ? "New to Netflix? Sign up now."
            : "Already registered ? Sign In."}
        </p>
      </form>
    </div>
  );
};

export default Login;
