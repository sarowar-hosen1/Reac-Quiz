import React from 'react';
import Checkbox from "./Checkbox.js";
import classes from "../styles/Answer.module.css";
import { Fragment } from 'react';

const Answer = ({ options = [], handleChange, input }) => {
    return (
        <div className={classes.answers}>
            {
                options.map((option, index) => (
                    <Fragment key={index}>
                        {input ? (
                            <Checkbox
                                className={classes.answer}
                                key={index}
                                text={option.title}
                                value={index}
                                checked={option.checked}
                                onChange={(e) => handleChange(e, index)}
                            />
                        ) : (
                            <Checkbox
                                className={`${classes.answer} ${option.correct ?
                                        classes.correct :
                                        option.checked ?
                                            classes.wrong :
                                            null}`}
                                key={index}
                                text={option.title}
                                checked={option.checked}
                                disabled
                            />
                        )}
                    </Fragment>
                ))
            }
        </div>
    );
};

export default Answer;