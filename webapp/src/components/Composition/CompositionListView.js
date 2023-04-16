// src/components/CompositionListView.js
import React from 'react';
import {useState,useEffect} from "react";
import CompositionCard from './CompositionCard';
import { Sidebar, Button } from 'flowbite-react';
import { HiAnnotation } from 'react-icons/hi';

const CompositionListView = ({handleCompChange, comps}) => {

  var url="http://localhost:5000/graphql"+"?"+"query"+"={comprehensions{_id,title}}";
  console.log(url);
  const colors = ['purpleToBlue', 'cyanToBlue', 'greenToBlue'];
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
<p class="text-center text-2xl text-gray-900 dark:text-white">
  Comprehensions
</p>
<br></br>
<div className="flex flex-col">
    {comps.map((comp, index) => (
      <div className="my-2 flex justify-center">
        <Button
          className="w-full"
          outline={true}
          gradientDuoTone={colors[index % colors.length]}
          onClick={()=>handleCompChange(index)}
        >
          {comp.title}
        </Button>
      </div>
    ))}
  </div>
</>
  );
};


export default CompositionListView;
