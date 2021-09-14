import React, { useEffect, useReducer, useState } from 'react';
import Answer from '../components/Answer';
import ProgressBar from '../components/ProgressBar';
import MiniPlayer from '../components/MiniPlayer';
import { useHistory, useParams } from 'react-router';
import useQuestions from '../hooks/useQuestions';
import _ from "lodash";
import { useAuth } from '../contexts/AuthContext';
import { getDatabase, ref, set } from '@firebase/database';


const initialState = null;
const reducer = (state, action) => {
    switch (action.type) {
        case 'questions':
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false
                });
            });
            return action.value;
        case "answers":
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionIndex].checked = action.value;
            return questions;

        default:
            return state
    }
}


const Quiz = () => {
    const { id } = useParams();
    const { loading, error, questions } = useQuestions(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [qna, dispatch] = useReducer(reducer, initialState);
    const { currentUser } = useAuth()
    const history = useHistory();
    const { location } = history;
    const {state} = location;
    
    useEffect(() => {
        dispatch({
            type: 'questions',
            value: questions
        })
    }, [questions])

    function handleAnswerChange(e, index) {
        dispatch({
            type: 'answers',
            questionID: currentQuestion,
            optionIndex: index,
            value: e.target.checked
        })
    }

    //handle when user click the next button to get the next questions
    function handleNext() {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((prevCurrent) => prevCurrent + 1)
        }
    }

    //handle when user click the prev button to get the previous questions
    function handlePrev() {
        if (currentQuestion >= 1 && currentQuestion <= questions.length) {
            setCurrentQuestion((prevCurrent) => prevCurrent - 1)
        }
    }

    //quiz submit
    async function submit() {
        const { uid } = currentUser;
        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`)

        await set(resultRef, {
            [id]: qna
        })

        history.push({
            pathname: `/result/${id}`,
            state: { qna }
        })
    }

    //calculate percentage of ProgressBar
    const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;


    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>There was an error!</div>}
            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answer
                        input
                        options={qna[currentQuestion].options}
                        handleChange={handleAnswerChange}
                    />
                    <ProgressBar
                        next={handleNext}
                        prev={handlePrev}
                        submit={submit}
                        progress={percentage}
                    />
                    <MiniPlayer id={id} title={state} />
                </>
            )}
        </>
    );
};

export default Quiz;