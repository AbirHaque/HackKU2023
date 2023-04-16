// src/components/CompositionCard.js
import React from 'react';
import { Card } from 'flowbite-react';

const CompositionCard = ({ title }) => {
  return (
    <>
    {/* <h1>Ayy lmao1</h1> */}
    <li className="title-item">
    <p class="text-1xl text-gray-900 dark:text-white">Comp {title}</p>
    </li>
    </>
  );
};

export default CompositionCard;
