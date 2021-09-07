import React from 'react';
import signupLogo from "../assests/images/signup.svg";
import classes from "../styles/Illustration.module.css"
const Illustration = ({img}) => {
    return (
        <div class={classes.illustration}>
            <img src={img} alt="Signup" />
        </div>
    );
};

export default Illustration;