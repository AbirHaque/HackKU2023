// src/components/newButton.js
import React from 'react';
import { Button } from 'flowbite-react';


const NewButton = ({ onClick }) => (
    <Button pill={true} className="new-button" onClick={onClick}>
    New
  </Button>
);

export default NewButton;
