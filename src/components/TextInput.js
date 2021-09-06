import React from 'react';
import classes from '../styles/TextInput.module.css';

const TextInput = ({ children, ...rest }) => {
    return (
        <div class={classes.textInput}>
            <input {...rest} />
            <span class="material-icons-outlined"> {children} </span>
        </div>
    );
};

export default TextInput;