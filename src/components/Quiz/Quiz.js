import React from 'react';
import Options from '../Options/Options';

const QuizDetails = ({ questionAll }) => {
    // const { questions } = question;
    const { question, options } = questionAll;
    return (
        <div>
            <h3 className='pt-3 font-semibold'>Question: {question.slice(3, -4)}</h3>
            <div>
                {
                    options.map(option => <Options key={option} option={option}></Options>)
                }
            </div>

        </div>
    );
};

export default QuizDetails;