import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import {auth, createUserProfileDocument} from '../../firebase/firebase.util';

import './signup.styles.scss';

class Signup extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (e) => {
      e.preventDefault();

      const {displayName, email, password} = this.state;

      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        alert('try');
        await createUserProfileDocument(user, {displayName});
        alert('await after');
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
      } catch(e) {

      }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Name"
            name="displayName"
            type="text"
            value={displayName}
            className="form-input"
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={email}
            className="form-input"
            handleChange={this.handleChange}
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
          />
          <button className="custom-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
