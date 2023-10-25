import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundImage"
        />{" "}
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0  rounded-lg text-white bg-opacity-80">
        <h1 className=" font-bold text-3xl py-3 font-sans">
          {isSignIn ? " Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className=" p-4 my-4 w-11/12 bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Adress"
          className=" p-4 my-4 w-11/12 bg-gray-700 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className=" p-4 my-4  w-11/12 bg-gray-700 rounded-lg  "
        />
        <button className="p-4 my-6 bg-red-600  w-full rounded-lg">
          {isSignIn ? " Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-gray-400 font-sans font-bold cursor-pointer"
          onClick={handleToggleSignIn}
        >
          {isSignIn
            ? "  New to Netflix ? Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
