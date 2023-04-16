// src/components/FilterOutButton.js
import React from 'react';
import { TextInput } from 'flowbite-react';


const FilterOutButton = ({ onClick }) => (
  // <button className="filter-out-button" onClick={onClick}>
  //   Filter Out
  // </button>

<TextInput
  id="email3"
  type="email"
  placeholder="What you know:"

/>

);

export default FilterOutButton;
