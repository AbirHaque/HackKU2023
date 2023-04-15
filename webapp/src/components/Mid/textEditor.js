// src/components/textEditor.js
import React from 'react';

const textEditor = ({ text, onChangeText }) => (
  <textarea
    className="text-editor"
    value={text}
    onChange={e => onChangeText(e.target.value)}
  />
);

export default textEditor;
