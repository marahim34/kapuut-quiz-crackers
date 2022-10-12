import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { QuizContext } from '../Quiz/Quiz';


const Options = ({ option, handler }) => {
    const correctAnswer = useContext(QuizContext);
    console.log(correctAnswer);


    return (
        <div className='flex inline-block pt-2'>
            <label><input id={option} type="radio" name="radio-2" className="radio radio-primary mr-3" onClick={() => handler(option)} /> {option}</label>
        </div>
    );
};

export default Options;