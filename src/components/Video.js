import React from 'react';
import classes from "../styles/Vidoe.module.css";

const Video = ({title, id, noq}) => {
    return (
        <div className={classes.video}>
                <img src={` http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" />
                <p>{title}</p>
                <div className={classes.qmeta}>
                    <p>{noq}</p>
                    <p>Score : {noq * 5}</p>
                </div>
            </div>
    );
};

export default Video;