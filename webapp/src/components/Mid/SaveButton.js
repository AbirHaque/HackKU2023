// src/components/saveButton.js
import React from 'react';
import { Button } from 'flowbite-react';

const SaveButton = ({ onClick }) => (
  <Button color="success" pill={true} className="save-button" onClick={onClick}>
    Save    
  </Button>
);

export default SaveButton;
