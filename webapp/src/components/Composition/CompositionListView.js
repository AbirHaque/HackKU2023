// src/components/CompositionListView.js
import React from 'react';
import {useState,useEffect} from "react";
import CompositionCard from './CompositionCard';

const CompositionListView = () => {
  var url="http://localhost:5000/graphql"+"?"+"query"+"={comprehensions{_id,title}}";
  console.log(url);
  fetch(url).then((response)=>response.json())
  .then((data)=>{
    var titles=[];
    var comprehensions=data.data.comprehensions;
    for(var i = 0; i < comprehensions.length;i++){
      titles.push(comprehensions[i].title);
    }
    console.log(data);
    return (
      <ul className="title-list">
        <p class="text-2xl text-gray-900 dark:text-white">Comp Titles</p>
        {titles.map((title, index) => (
          <CompositionCard key={index} title={title} />
        ))}
      </ul>
    );
  });
};

export default CompositionListView;
