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
    {title: 'TITLE 1', content: "<p>In <a href=\"/wiki/Mathematics\" title=\"Mathematics\">mathematics</a>, the <b>natural numbers</b> are the <a href=\"/wiki/Number\" title=\"Number\">numbers</a> 1, 2, 3, etc., possibly including 0 as well. Some definitions, including the standard <a href=\"/wiki/ISO/IEC_80000\" title=\"ISO/IEC 80000\">ISO 80000-2</a>,<sup class=\"reference\" id=\"cite_ref-ISO80000_1-0\"><a href=\"#cite_note-ISO80000-1\">[1]</a></sup><sup class=\"reference\" id=\"cite_ref-MacLaneBirkhoff1999p15_2-0\"><a href=\"#cite_note-MacLaneBirkhoff1999p15-2\">[a]</a></sup> begin the natural numbers with <span class=\"texhtml\">0</span>, corresponding to the <b>non-negative integers</b> <span class=\"texhtml\">0, 1, 2, 3, ...</span>, whereas others start with <span class=\"texhtml\">1</span>, corresponding to the <b>positive integers</b> <span class=\"texhtml\">1, 2, 3, ...</span><sup class=\"reference\" id=\"cite_ref-3\"><a href=\"#cite_note-3\">[2]</a></sup><sup class=\"reference\" id=\"cite_ref-5\"><a href=\"#cite_note-5\">[b]</a></sup> Texts that exclude zero from the natural numbers sometimes refer to the natural numbers together with zero as the <b>whole numbers</b>, while in other writings, that term is used instead for the integers (including negative integers).<sup class=\"reference\" id=\"cite_ref-6\"><a href=\"#cite_note-6\">[4]</a></sup> In common language, particularly in primary school education, natural numbers may be called <b>counting numbers</b><sup class=\"reference\" id=\"cite_ref-MathWorld_CountingNumber_7-0\"><a href=\"#cite_note-MathWorld_CountingNumber-7\">[5]</a></sup> to intuitively exclude the negative integers and zero, and also to contrast the <a href=\"/wiki/Discrete_mathematics\" title=\"Discrete mathematics\">discreteness</a> of <a href=\"/wiki/Counting\" title=\"Counting\">counting</a> to the <a href=\"/wiki/List_of_continuity-related_mathematical_topics\" title=\"List of continuity-related mathematical topics\">continuity</a> of <a href=\"/wiki/Measurement\" title=\"Measurement\">measurement</a>—a hallmark characteristic of <a href=\"/wiki/Real_number\" title=\"Real number\">real numbers</a>.\n</p>"},
    {title: 'TITLE 2', content: 'CONTENT 2'},
    {title: 'TITLE 3', content: 'CONTENT 3'},
    {title: 'TITLE 4', content: 'CONTENT 4'},
    {title: 'TITLE 5', content: 'CONTENT 5'},
  ]

  return (
    <>
    <p class="text-2xl text-gray-900 dark:text-white">Wiki Links</p>
    {/* <ul className="title-list">
      {titles.map((title, index) => (
        <WikiCard key={index} title={title} />
      ))}
    </ul>
    <ul className="summary-list">
      {summaries.map((summary, index) => (
        <WikiCard key={index} summary={summary} />
      ))}
    </ul> */}
        <Accordion alwaysOpen={true}>
         {accData.map((acc, index) => (
           <Accordion.Panel>
           <Accordion.Title>
           {acc.title}
           </Accordion.Title>
           <Accordion.Content>
             <p className="mb-2 text-gray-500 dark:text-gray-400">
             {acc.content}        
              </p>
           </Accordion.Content>
         </Accordion.Panel>
          ))} 
      
      {/* <Accordion.Panel>
        <Accordion.Title>
          Is there a Figma file available?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400"></p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What are the differences between Flowbite and Tailwind UI?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel> */}
    </Accordion>
    
    </>
  );
};

export default WikiListView;