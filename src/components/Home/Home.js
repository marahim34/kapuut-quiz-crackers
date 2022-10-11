import React from 'react';
import { useLoaderData } from 'react-router';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    const topicsCategory = topics.data;
    return (
        <div>
            <h3>This is Home {topicsCategory.length}</h3>
            <div className='flex flex-col md:flex-row items-center gap-8'>
                {
                    topicsCategory.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;