// src/components/CompositionListView.js
import React from 'react';
import WikiCard from './WikiCard';

const WikiListView = () => {
  const titles = [
    'Title 1',
    'Title 2',
    'Title 3',
    'Title 4',
    'Title 5',
  ];

  return (
    <>
    <h1>Ayy lmao3</h1>
    <ul className="title-list">
      {titles.map((title, index) => (
        <WikiCard key={index} title={title} />
      ))}
    </ul>
    </>
  );
};

export default WikiListView;