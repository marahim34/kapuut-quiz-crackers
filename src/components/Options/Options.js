import React from 'react';


const Options = ({ option }) => {
    // const {options}

    // const handlerError = () => {
    //     let message;
    //     if (option === correctAnswer) {
    //         return 'Your answer is Correct'
    //     }
    //     else {
    //         return 'Your answer is wrong. Try Again!'
    //     }
    // }
    return (
        <div className='flex inline-block pt-2'>
            <label><input type="radio" name="radio-2" className="radio radio-primary mr-3" /> {option}</label>
        </div>
    );
};

export default Options;