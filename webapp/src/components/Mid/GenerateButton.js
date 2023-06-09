// src/components/GenerateButton.js
import React from 'react';
import { Button } from 'flowbite-react';

const GenerateButton = ({ onClick }) => (
  <Button color="purple" pill={true} className="generate-button" onClick={onClick}>
    Analyze
  </Button>
);

export default GenerateButton;
