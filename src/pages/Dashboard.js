import React from 'react';
import img from '../../src/images/others/6-best-practices-for-Dashboard-Design-Justinmind-header-768x492.png'

const Dashboard = () => {
    return (
        <div className='w-50 mx-auto'>
            <p className='text-center text-2xl text-orange-600 my-16'> - DASHBOARD - </p>
            <img className='mx-auto' src={img} alt="" />
        </div>
    );
};

export default Dashboard;