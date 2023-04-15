// src/components/saveButton.js
import React from 'react';

const SaveButton = ({ onClick }) => (
  <button className="save-button" onClick={onClick}>
    Save
  </button>
);

export default SaveButton;
