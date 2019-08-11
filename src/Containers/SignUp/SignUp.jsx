import React, { Component } from "react";

import "./SignUp.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../../Components/UI/FormInput/FormInput";
import CustomButton from "../../Components/UI/CustomButton/CustomButton";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  submitHandler = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state; // Object Distructuring

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      // auth.createUserWithEmailAndPassword(email, password) creates a new user account using the specofied email and password
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  changeHandler = event => {
    const { value, name } = event.target; // Object Distructuring

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign in with your email and password</span>

        <form className="sign-up-form" onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            changeHandler={this.changeHandler}
            label="Display Name"
            required
          />
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
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            changeHandler={this.changeHandler}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
