import React from 'react';
import Answer from "./Answer";
import classes from "../styles/Question.module.css"
const Question = () => {
    return (
        <div className={classes.question}>
            <div className={classes.qtitle}>
                <span class="material-icons-outlined">help-outlined</span>
                Here goes the questions from learn with sumit?
            </div>
            <Answer />
        </div>
    );
};

export default Question;