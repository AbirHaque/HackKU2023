// src/components/CompositionListView.js
import React from 'react';
import CompositionCard from './CompositionCard';

const CompositionListView = () => {
  const titles = [
    'Title 1',
    'Title 2',
    'Title 3',
    'Title 4',
    'Title 5',
  ];

  return (
    <ul className="title-list">
      <p class="text-2xl text-gray-900 dark:text-white">Comp Titles</p>
      {titles.map((title, index) => (
        <CompositionCard key={index} title={title} />
      ))}
    </ul>
  );
};

export default CompositionListView;
