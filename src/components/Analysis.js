import React from 'react';
import Questions from "./Questions";
import classes from "../styles/Analysis.module.css"

const Analysis = ({answers}) => {
    return (
        <div className={classes.analysis}>
            <h1>Qeustion Analysis</h1>
            <Questions answers={answers} />
        </div>
    );
};

export default Analysis;