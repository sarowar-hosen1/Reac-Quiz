import React from 'react';
import signupLogo from "../assests/images/signup.svg";
import classes from "../styles/Illustration.module.css"
const Illustration = () => {
    return (
        <div class={classes.illustration}>
            <img src={signupLogo} alt="Signup" />
        </div>
    );
};

export default Illustration;