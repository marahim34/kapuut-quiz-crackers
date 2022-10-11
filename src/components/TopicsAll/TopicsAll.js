import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const topicsAll = ({ topicsAll }) => {
    const { name, logo, total } = topicsAll;
    return (
        <div className="card w-96 bg-base-100 shadow-xl gap-8">
            <figure><img src={logo} alt="topicsAll" width={240} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Quiz: {total}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Start Now  <span className='pl-2'><FontAwesomeIcon icon={faArrowRight} /></span> </button>
                </div>
            </div>
        </div>
    );
};

export default topicsAll;