import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {

    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const quizItems = data.data.data;
                const quizDataForStatistics = quizItems.map(quiz => {
                    const chartItem = {
                        name: quiz.name,
                        total: quiz.total,
                    }
                    return chartItem;
                })
                // console.log(quizDataForStatistics);
                setStatistics(quizDataForStatistics)
            });
    }, [])


    return (
        <div>
            <div className='flex justify-center mt-12' width={100} height={100}>

                <LineChart width={730} height={250} data={statistics}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;