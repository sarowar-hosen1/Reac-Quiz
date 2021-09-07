import React from 'react';
import Answer from '../components/Answer';
import ProgressBar from '../components/ProgressBar';
import MiniPlayer from '../components/MiniPlayer';

const Quiz = () => {
    return (
        <>
            <h1>Pick three of your favorite Wars Films</h1>
            <h4>Question can have multiple answers</h4>
            <Answer />
            <ProgressBar />
            <MiniPlayer />
        </>
    );
};

export default Quiz;