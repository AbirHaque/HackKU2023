// src/components/CompositionListView.js
import React from 'react';
import WikiCard from './WikiCard';
import { Accordion } from 'flowbite-react';

const WikiListView = ({wikiData}) => {


  return (
    <>
    {/* <p class="text-2xl text-gray-900 dark:text-white">Wiki Links</p> */}
    <p class="text-center text-2xl text-gray-900 dark:text-white">Wiki Links</p>
    <br></br>
 
        <Accordion alwaysOpen={true}>
         {wikiData.map((acc, index) => (
           <Accordion.Panel>
           <Accordion.Title>
           {acc.title}
           </Accordion.Title>
           <Accordion.Content>
           {index === 0 ? (
                <p
                  className="mb-2 text-gray-500 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: acc.content }}
                />
              ) : (
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {acc.content}
                </p>
              )}
           </Accordion.Content>
         </Accordion.Panel>
          ))} 
      
    
    </Accordion>
    
    </>
  );
};

export default WikiListView;