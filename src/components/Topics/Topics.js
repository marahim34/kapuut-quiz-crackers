import React, { useState, useEffect } from 'react';
import Topic from '../Topic/Topic';

const Topics = () => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setTopics(data.data))
    }, [])

    return (
        <div className='block md:grid md:grid-cols-2 items-center gap-8 md:ml-12'>
            {
                topics.map(topic => <Topic key={topic.id} topic={topic} ></Topic>)
            }
        </div>
    );
};

export default Topics;