import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic;
    return (
        <div className="card w-96 bg-base-100 shadow-xl gap-8">
            <figure><img src={logo} alt="topicsAll" width={240} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Quiz: {total}</p>
            </div>
        </div>
    );
};

export default Topic;