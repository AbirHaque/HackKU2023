// src/components/CompositionListView.js
import React from 'react';
import WikiCard from './WikiCard';
import { Accordion } from 'flowbite-react';
import Skeleton from 'react-loading-skeleton';

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
           {acc.title || <Skeleton />}
           </Accordion.Title>
           <Accordion.Content>
           {(
                <p
                  className="mb-2 text-gray-500 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: ((acc.content.replaceAll("href=\"","href=\"https://wikipedia.org") || <Skeleton />).replaceAll("<a","<u><a")).replaceAll("</a>","</a></u>") }}
                />
              ) }
           </Accordion.Content>
         </Accordion.Panel>
          ))} 
      
    
    </Accordion>
    
    </>
  );
};

export default WikiListView;