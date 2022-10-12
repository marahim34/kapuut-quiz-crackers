import React from 'react';


const Options = ({ option, handler }) => {

    return (
        <div className='flex inline-block pt-2'>
            <label><input type="radio" name="radio-2" className="radio radio-primary mr-3" /> {option}</label>
        </div>
    );
};

export default Options;