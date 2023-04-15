import React from 'react';
import CompositionListView from '../Composition/CompositionListView';
import WikiListView from '../Wiki/WikiListView';

const Dashboard = () => {
  return (
    <>
    <h1>Dashboard</h1>
    <div className="dashboard">
        <div className='CompositionListView'></div>
        <CompositionListView/>
        <div className='WikiListView'></div>
        <WikiListView/>
    </div>
    </>
  );
};

export default Dashboard;