// src/components/CompositionListView.js
import React from 'react';
import {useState,useEffect} from "react";
import CompositionCard from './CompositionCard';
import { Sidebar } from 'flowbite-react';
import { HiAnnotation } from 'react-icons/hi';

const CompositionListView = ({comps}) => {

  var url="http://localhost:5000/graphql"+"?"+"query"+"={comprehensions{_id,title}}";
  console.log(url);
  // fetch(url).then((response)=>response.json())
  // .then((data)=>{
  //   var comprehensions=data.data.comprehensions;
  //   for(var i = 0; i < comprehensions.length;i++){
  //     titles.push(comprehensions[i].title);
  //   }
  //   console.log(titles);

    
  // });
  return (
    <>
<p class="text-center text-2xl text-gray-900 dark:text-white">Comprehensions</p>
<br></br>
<div className="flex">          

  <Sidebar aria-label="Comprehension List">
  <Sidebar.Items>

    {comps.map((comp) => (
            <Sidebar.ItemGroup>
              <Sidebar.Item
              href="#"
              icon={HiAnnotation}
            >
              {comp.title}
            </Sidebar.Item>
            </Sidebar.ItemGroup>
    ))}
  </Sidebar.Items>
</Sidebar>
</div>
</>
  );
};

export default CompositionListView;
