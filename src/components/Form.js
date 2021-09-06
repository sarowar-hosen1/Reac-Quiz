import React from 'react';
import classes from "../styles/Form.module.css";

const Form = ({ children, ...rest }) => {
    return (
        <form action="#" className={classes.form} {...rest}>
            {children}
        </form>
    );
};

export default Form;