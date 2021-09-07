import React from 'react';
import Illustration from "../components/Illustration";
import loginImage from '../assests/images/signup.svg'
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import classes from '../styles/Login.module.css';
import {Link} from "react-router-dom"

const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration img={loginImage} />
                <Form className={`${classes.login}/ form`}>
                    <TextInput type="email" placeholder="Enter email">alternate_email</TextInput>
                    <TextInput type="password" placeholder="Enter password">lock</TextInput>
                    <Button >Submit now</Button>
                    <div class="info">Don't have an account? <Link to="signup">Signup</Link> instead.</div>
                </Form>
            </div>
        </>
    );
};

export default Login;