import React from 'react';
import Summary from '../components/Summary';
import Analysis from '../components/Analysis';
import { useHistory, useParams } from 'react-router';
import useAnswers from "../hooks/useAnswers";
import _ from "lodash";

const Result = () => {
    const { id } = useParams();
    const { location } = useHistory();
    const { state } = location;
    const { qna } = state;

    const { loading, error, answers } = useAnswers(id);

    function calculate() {
        let score = 0;
        let correntIndexs = [],
            checkedIndexs = [];
        answers.forEach((answer, index1) => {
            answer.options.forEach((option, index2) => {
                if (option.correct) correntIndexs.push(index2);
                if (qna[index1].options[index2].checked) {
                    checkedIndexs.push(index2);
                    option.checked = true;
                }
            });
            if (_.isEqual(correntIndexs, checkedIndexs)) {
                score = score + 5
            }

        });

        return score;
    }

    const userScore = calculate();

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>There was an error !</div>}
            {answers && answers.length > 0 && (
                <>
                    <Summary score={userScore} noq={answers.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
};

export default Result;