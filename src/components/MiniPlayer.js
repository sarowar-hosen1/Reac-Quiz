import React, { useRef, useState } from 'react';
import classes from "../styles/MiniPlayer.module.css";
import ReactPlayer from "react-player/youtube";

const MiniPlayer = ({ id, title }) => {
    const [status, setStatus] = useState(false);
    const buttonRef = useRef();

    const videoUrl = `https://www.youtube.com/watch?v=${id}`;

    function toogleMiniplayer() {
        if (!status) {
            buttonRef.current.classList.remove(classes.floatingBtn)
            setStatus(true)
        } else {
            buttonRef.current.classList.add(classes.floatingBtn)
            setStatus(false)
        }
    }
    return (
        <div
            className={`${classes.miniPlayer} ${classes.floatingBtn}`}
            ref={buttonRef}
            onClick={toogleMiniplayer}
        >
            <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
            <span className={`material-icons-outlined ${classes.close} `} onClick={toogleMiniplayer}> close </span>
            <ReactPlayer
                className={classes.player}
                url={videoUrl}
                height={"200px"}
                width={"300px"}
                controls
                playIcon
            />
            <p>{title}</p>
        </div>
    );
};

export default MiniPlayer;