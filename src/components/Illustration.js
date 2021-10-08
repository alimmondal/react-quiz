import React from 'react';
import signupImage from '../assets/images/signup.svg';
import classes from "../styles/illustration.module.css";

export default function Illustration() {
    return (
      <div>
        <div className={classes.illustration}>
          <img src={signupImage} alt="Signup" />
        </div>
      </div>
    );
}