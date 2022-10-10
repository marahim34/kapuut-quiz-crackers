import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../full-logo.png';

const Header = () => {
    return (
        <div className='flex space-x-8 items-center justify-between mt-3'>
            <div className='flex ml-10 items-center'>
                <div className='flex flex-row'>
                    <Link to="/"><img src={img} alt="" width={160} /></Link>
                </div>
                <dir className='hidden lg:block sm:block'>
                    <p className='font-semibold text-2xl md:text-xl'>Learning Full Stack Development</p>
                    <p className='mt-0 text-xl md:text-base'>Learning with Joy</p>
                </dir>
            </div>
            <div className='mr-10'>
                <nav>
                    <Link className='mr-4 hover:bg-purple-800 hover:font-semibold font hover:text-white' to="/">Home</Link>
                    <Link className='mr-4 hover:bg-purple-800 hover:font-semibold font hover:text-white' to="topics">Topics</Link>
                    <Link className='mr-4 hover:bg-purple-800 hover:font-semibold font hover:text-white' to="statistics">Statistics</Link>
                    <Link className='mr-4 hover:bg-purple-800 hover:font-semibold font hover:text-white' to="blog">Blog</Link>
                    <Link className='mr-4 hover:bg-purple-800 hover:font-semibold font hover:text-white' to="about">About</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;