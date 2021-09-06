import React from 'react';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import classes from "../styles/Signup.module.css";

const Signup = () => {
    return (
        <>
            <h1>Create a new account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.signup} form`}>
                    <TextInput type="text" placeholder="Enter name">person</TextInput>
                    <TextInput type="email" placeholder="Enter email">alternate_email</TextInput>
                    <TextInput type="password" placeholder="Enter name">lock</TextInput>
                    <TextInput type="password" placeholder="Enter name">lock_clock</TextInput>
                    <Checkbox type="checkbox" text="I agree to the Terms and Conditions" />
                    <Button>Submit now</Button>
                    <div class="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Signup;