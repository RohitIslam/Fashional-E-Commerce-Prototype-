import React from "react";
import "./SignInAndUp.scss";
import SignIn from "../../Containers/SignIn/SignIn";
import SignUp from "../../Containers/SignUp/SignUp";

const SignInAndUp = () => {
  return (
    <div className="sign-in-and-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndUp;
