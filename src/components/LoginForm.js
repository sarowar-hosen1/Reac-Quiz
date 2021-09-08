import React, { useState } from 'react';
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import classes from '../styles/Login.module.css';
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { signin } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await signin(email, password);
            history.push("/")
        } catch (error) {
            setError("Failed to login!")
            setLoading(false);
        }
    }

    return (
        <Form className={`${classes.login}/`} onSubmit={handleSubmit}>
            <TextInput
                type="email"
                placeholder="Enter email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}

            />
            <TextInput
                type="password"
                placeholder="Enter password"
                icon="lock"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button disabled={loading}>Submit now</Button>
            {error && <p style={{ color: "red", margin: "10px 0" }}>{error}</p>}
            <div className="info">Don't have an account? <Link to="signup">Signup</Link> instead.</div>
        </Form>
    );
};

export default LoginForm;