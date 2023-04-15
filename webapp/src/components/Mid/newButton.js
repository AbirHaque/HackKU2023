// src/components/newButton.js
import React from 'react';

const NewButton = ({ onClick }) => (
  <button className="new-button" onClick={onClick}>
    New
  </button>
);

export default NewButton;
