import React from 'react';
import classes from "../styles/Vidoe.module.css";
import video from "../assests/images/3.jpg"

const Video = () => {
    return (
        <a href="quiz.html"
        ><div class={classes.video}>
                <img src={video} alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div class={classes.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
};

export default Video;