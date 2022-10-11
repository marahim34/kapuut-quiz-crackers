import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className="card w-96 bg-base-100 shadow-xl gap-8">
            <figure><img src={logo} alt="topics" width={240} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Topic;