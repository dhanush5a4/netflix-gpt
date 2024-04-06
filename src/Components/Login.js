import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSigninForm = () => {
    setIsSigninForm(!isSigninForm);
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
      <form className="w-3/12 p-12 absolute bg-black my-40 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-lg ">
        <h1 className="font-bold text-3xl py-4 w-full bg-opacity-85 rounded-lg">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-opacity-85 rounded-lg  bg-gray-700 "
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-opacity-85 rounded-lg  bg-gray-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-opacity-85 rounded-lg  bg-gray-700"
        />
        <button
          type="submit"
          className="p-4 my-4 bg-red-700 w-full rounded-lg "
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-sm py-4 my-4 cursor-pointer "
          onClick={toggleSigninForm}
        >
          New to Netflix? Sign up now.
        </p>
      </form>
    </div>
  );
};

export default Login;
