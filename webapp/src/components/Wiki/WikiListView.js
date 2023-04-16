// src/components/CompositionListView.js
import React from 'react';
import WikiCard from './WikiCard';
import { Accordion } from 'flowbite-react';

const WikiListView = () => {
  const titles = [
    'Title 1',
    'Title 2',
    'Title 3',
    'Title 4',
    'Title 5',
  ];

  const summaries = [
    'Summary 1',
    'Summary 2',
    'Summary 3',
    'Summary 4',
    'Summary 5',
  ];

  const accData = [
    {title: 'TITLE 1', content: (("<p>In <a href=\"/wiki/Mathematics\" title=\"Mathematics\">mathematics</a>, the <b>natural numbers</b> are the <a href=\"/wiki/Number\" title=\"Number\">numbers</a> 1, 2, 3, etc., possibly including 0 as well. Some definitions, including the standard <a href=\"/wiki/ISO/IEC_80000\" title=\"ISO/IEC 80000\">ISO 80000-2</a>,<sup class=\"reference\" id=\"cite_ref-ISO80000_1-0\"><a href=\"#cite_note-ISO80000-1\">[1]</a></sup><sup class=\"reference\" id=\"cite_ref-MacLaneBirkhoff1999p15_2-0\"><a href=\"#cite_note-MacLaneBirkhoff1999p15-2\">[a]</a></sup> begin the natural numbers with <span class=\"texhtml\">0</span>, corresponding to the <b>non-negative integers</b> <span class=\"texhtml\">0, 1, 2, 3, ...</span>, whereas others start with <span class=\"texhtml\">1</span>, corresponding to the <b>positive integers</b> <span class=\"texhtml\">1, 2, 3, ...</span><sup class=\"reference\" id=\"cite_ref-3\"><a href=\"#cite_note-3\">[2]</a></sup><sup class=\"reference\" id=\"cite_ref-5\"><a href=\"#cite_note-5\">[b]</a></sup> Texts that exclude zero from the natural numbers sometimes refer to the natural numbers together with zero as the <b>whole numbers</b>, while in other writings, that term is used instead for the integers (including negative integers).<sup class=\"reference\" id=\"cite_ref-6\"><a href=\"#cite_note-6\">[4]</a></sup> In common language, particularly in primary school education, natural numbers may be called <b>counting numbers</b><sup class=\"reference\" id=\"cite_ref-MathWorld_CountingNumber_7-0\"><a href=\"#cite_note-MathWorld_CountingNumber-7\">[5]</a></sup> to intuitively exclude the negative integers and zero, and also to contrast the <a href=\"/wiki/Discrete_mathematics\" title=\"Discrete mathematics\">discreteness</a> of <a href=\"/wiki/Counting\" title=\"Counting\">counting</a> to the <a href=\"/wiki/List_of_continuity-related_mathematical_topics\" title=\"List of continuity-related mathematical topics\">continuity</a> of <a href=\"/wiki/Measurement\" title=\"Measurement\">measurement</a>—a hallmark characteristic of <a href=\"/wiki/Real_number\" title=\"Real number\">real numbers</a>.\n</p>".replaceAll("href=\"","href=\"https://en.wikipedia.org")).replaceAll("<a","<u><a")).replaceAll("</a>","</a></u>")},
    {title: 'TITLE 2', content: 'CONTENT 2'},
    {title: 'TITLE 3', content: 'CONTENT 3'},
    {title: 'TITLE 4', content: 'CONTENT 4'},
    {title: 'TITLE 5', content: 'CONTENT 5'},
  ]

  return (
    <>
    {/* <p class="text-2xl text-gray-900 dark:text-white">Wiki Links</p> */}
    <p class="text-center text-2xl text-gray-900 dark:text-white">Wiki Links</p>
    <br></br>
 
        <Accordion alwaysOpen={true}>
         {accData.map((acc, index) => (
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