import React from 'react';
import Checkbox from "./Checkbox.js";
import classes from "../styles/Answer.module.css";
const Answer = () => {
    return (
        <div className={classes.answers}>
            <Checkbox className={classes.answer}>A New Hope 1</Checkbox>
        </div>
    );
};

export default Answer;