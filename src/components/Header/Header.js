import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../full-logo.png';

const Header = () => {
    return (
        <div className='flex space-x-8 items-center justify-between mt-3'>
            <div className='flex ml-10'>
                <div className='flex flex-row'>
                    <Link to="/"><img src={img} alt="" width={160} /></Link>

                </div>
                <dir className='hidden lg:block sm:block'>
                    <p className='font-semibold text-2xl'>Learning Full Stack Development</p>
                    <p className='mt-0 text-xl'>Learning with Joy</p>
                </dir>
            </div>
            <div className='mr-10'>
                <nav>
                    <Link className='mr-4' to="/">Home</Link>
                    <Link className='mr-4' to="topics">Topics</Link>
                    <Link className='mr-4' to="statistics">Statistics</Link>
                    <Link className='mr-4' to="blog">Blog</Link>
                    <Link className='mr-4' to="about">About</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;