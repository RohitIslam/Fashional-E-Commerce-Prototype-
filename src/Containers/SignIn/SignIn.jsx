import React, { Component } from "react";

import "./SignIn.scss";
import FormInput from "../../Components/UI/FormInput/FormInput";
import CustomButton from "../../Components/UI/CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  submitHandler = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  changeHandler = event => {
    const { value, name } = event.target; // Object Distructuring

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="SignIn">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.submitHandler}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            changeHandler={this.changeHandler}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            changeHandler={this.changeHandler}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
