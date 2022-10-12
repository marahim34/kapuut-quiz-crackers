import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React, { createContext, useState } from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const QuizContext = createContext([]);

const QuizDetails = ({ questionAll }) => {
    const { question, options, correctAnswer } = questionAll;
    // console.log(questionAll);
    const answer = correctAnswer;
    const notify = () => toast(answer);

    // console.log(answer);

    const handler = options => {
        // console.log(options);
        if (options === answer) {
            return toast('Answer is correct')
        }
        else {
            return toast('You are wrong. Click the eye button for correct answer')
        }
    }

    const [add, setAdd] = useState([question, options, correctAnswer, answer]);

    return (
        <QuizContext.Provider value={add}>
            <div>
                <div className='flex items-center'>
                    <h3 className='pt-3 font-semibold pr-10'>Question: {question.slice(3, -4)}</h3>
                    <button onClick={notify}><FontAwesomeIcon icon={faEye}> </FontAwesomeIcon></button><ToastContainer />
                </div>
                <div>
                    {
                        options.map(option => <Options key={option} option={option} handler={handler} ></Options>)
                    }
                </div>

            </div>
        </QuizContext.Provider>
    );
};

export default QuizDetails;