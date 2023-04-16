import React from 'react';
import { Accordion } from 'flowbite-react';

const WikiCard = ({ title, summary }) => {

  return (


    <Accordion.Panel>
        <Accordion.Title>
        {title}
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          {summary}        
           </p>
        </Accordion.Content>
      </Accordion.Panel>
  );
};

export default WikiCard;