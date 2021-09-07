import React from 'react';
import miniPlayerImage from '../assests/images/3.jpg';
import classes from "../styles/MiniPlayer.module.css";

const MiniPlayer = () => {
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
            <span class={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
            <span class={`material-icons-outlined ${classes.close} `}> close </span>
            <img src={miniPlayerImage} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
};

export default MiniPlayer;