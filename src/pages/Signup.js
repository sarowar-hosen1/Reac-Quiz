import React from 'react';
import Illustration from '../components/Illustration';
import signupImage from "../assests/images/signup.svg"
import SignupForm from '../components/SignupForm';

const Signup = () => {
    return (
        <>
            <h1>Create a new account</h1>
            <h3>{`${process.env.REACT_APP_API_KEY}`}</h3>
            <div className="column">
                <Illustration img={signupImage} />
                <SignupForm />
            </div>
        </>
    );
};

export default Signup;