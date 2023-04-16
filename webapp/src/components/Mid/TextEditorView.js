// src/components/textEditorView.js
import React, { useState } from 'react';
import Title from './Title';
import TextEditor from './TextEditor';
import NewButton from './NewButton';
import SaveButton from './SaveButton';
import GenerateButton from './GenerateButton';
import FilterOutButton from '../Footer/FilterView';


const TextEditorView = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('Untitled');

  const handleNew = () => {
    setText('');
    setTitle('Untitled');
  };

  const handleSave = () => {
    // Save the comprehension here
  };

  const handleGenerate = () => {
    // Generate the comprehension and update the title
    setTitle('Generated Title');
  };

  return (
    <div className="text-editor-view">
      <Title title={title} />
      <TextEditor text={text} onChangeText={setText} />
      <div class="h-20 grid grid-cols-3 gap-10 content-center">      
      <GenerateButton onClick={handleGenerate} />
      <SaveButton onClick={handleSave} />
      <NewButton onClick={handleNew} />
      
      </div>
    </div>
  );
};

export default TextEditorView;
