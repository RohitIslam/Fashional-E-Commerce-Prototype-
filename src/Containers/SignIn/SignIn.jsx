import React, { Component } from "react";

import "./SignIn.scss";
import FormInput from "../../Components/UI/FormInput/FormInput";

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
      <div>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.submitHandler}>
          <label>Email</label>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            changeHandler={this.changeHandler}
            label="Email"
            required
          />
          <label>Password</label>
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            changeHandler={this.changeHandler}
            label="Password"
            required
          />
          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
