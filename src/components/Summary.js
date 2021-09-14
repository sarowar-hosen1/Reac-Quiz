import React, { } from 'react';
import { useMemo } from 'react';

import DefaultImage from "../assests/images/success.png";
import useFetch from '../hooks/useFetch';
import classes from "../styles/Summary.module.css";

const Summary = ({ score, noq }) => {

    const getKeyword = useMemo(() => {
        if (score / (noq * 5) * 100 < 50) {
            return "failed"
        } else if (score / (noq * 5) * 100 < 75) {
            return "good"
        } else if (score / (noq * 5) * 100 < 100) {
            return "very good"
        } else {
            return "excellent"
        }
    },[score, noq])


    const { loading, error, result } = useFetch(`https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`, "GET",
        {
            "Authorization": "563492ad6f91700001000001ee4622329c524b45af4822165b53537d",
        })

    const image = result && result.photos && result.photos[0].src.medium
    console.log(image);


    return (
        <div className={classes.summary}>
            <div className={classes.point}>

                <p className={classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>
            {loading && <div>Loading your badge!</div>}
            {error && <div>An error occured!</div>}
            {!loading && !error && (
                <div className={classes.badge}>
                    <img src={image || DefaultImage} alt="Success" />
                </div>
            )}
        </div>
    );
};

export default Summary;