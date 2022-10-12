import React from 'react';
import { useLoaderData } from 'react-router';
import Quiz from '../Quiz/Quiz';

const QuizAll = () => {
    const quizAll = useLoaderData().data;
    const questions = quizAll.questions;


    return (
        <div className='m-8'>
            <h3 className='font-bold text-2xl text-center'>Quiz on {quizAll.name}</h3>
            {
                questions.map(questionAll => <Quiz key={questionAll.id} questionAll={questionAll}></Quiz>)
            }
        </div>
    );
};

export default QuizAll;