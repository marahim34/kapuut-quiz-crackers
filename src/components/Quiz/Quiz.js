import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizDetails = ({ questionAll }) => {
    const { question, options, correctAnswer, handler } = questionAll;
    // console.log(questionAll);
    const answer = correctAnswer;
    const notify = () => toast(answer);



    return (
        <div>
            <div className='flex items-center'>
                <h3 className='pt-3 font-semibold pr-10'>Question: {question.slice(3, -4)}</h3>
                <button onClick={notify}><FontAwesomeIcon icon={faEye}> </FontAwesomeIcon></button><ToastContainer />
            </div>
            <div>
                {
                    options.map(option => <Options key={option} option={option} ></Options>)
                }
            </div>

        </div>
    );
};

export default QuizDetails;