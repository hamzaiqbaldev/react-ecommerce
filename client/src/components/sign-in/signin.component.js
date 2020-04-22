import React, { useState } from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import FormInput from "../form-input/form-input.component";

import "./signin.styles.scss";

const Signin = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;
  
  const googleSignIn = async () => {
    try {
      signInWithGoogle();
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ ...userCredentials, email: "", password: "" });
    } catch (e) {
      console.log("error");
      console.log(e);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
        />
        <div className="buttons">
          <button className="custom-button" type="submit">
            Sign In
          </button>
          <button
            className="custom-button google-sign-in"
            onClick={() => googleSignIn()}
          >
            Signin with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
