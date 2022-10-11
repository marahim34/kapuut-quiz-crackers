import React from 'react';
import { useLoaderData } from 'react-router';
import TopicsAll from '../TopicsAll/TopicsAll';
import introVideo from '../../assets/Generic_SchoolsNBiz.mp4';

const Home = () => {
    const quizAll = useLoaderData();
    const topicsAllCategory = quizAll.data;
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8'>
                <div className='w-full md:w-2/4 pl-3 pr-3'>
                    <h2 className='font-bold text-2xl mb-2'>What is <span className='text-purple-800'>Kaputt!</span></h2>
                    <p>Kaputt! is a game-based learning platform that makes learners to drive into the knowledge of front-end development. It also helps everyone to create, share and play learning games or trivia quizzes related to website development in minutes. Unleash the fun in classrooms, offices and living rooms!</p>
                </div>
                <div>
                    <video src={introVideo} width="400" height="200" controls="controls" autoPlay={true} preload="auto"></video>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-8 mt-8'>
                {
                    topicsAllCategory.map(topicsAll => <TopicsAll key={topicsAll.id} topicsAll={topicsAll}></TopicsAll>)
                }
            </div>
        </div>
    );
};

export default Home;