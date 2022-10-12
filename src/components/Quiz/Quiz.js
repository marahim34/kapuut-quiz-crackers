import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Options from '../Options/Options';

const QuizDetails = ({ questionAll }) => {
    const { question, options, correctAnswer } = questionAll;
    const addHandler = () => {
        const answer = correctAnswer;
        console.log(answer);
        return correctAnswer;
    }

    return (
        <div>
            <div className='flex items-center'>
                <h3 className='pt-3 font-semibold pr-10'>Question: {question.slice(3, -4)}</h3>
                <button><FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </button>
            </div>
            <div>
                {
                    options.map(option => <Options key={option} option={option}></Options>)
                }
            </div>

        </div>
    );
};

export default QuizDetails;