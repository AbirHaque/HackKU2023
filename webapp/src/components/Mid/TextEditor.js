// src/components/textEditor.js
import React from 'react';
import { Textarea, Label } from 'flowbite-react';

const textEditor = ({ text, onChangeText }) => (
  // <textarea
  //   className="text-editor"
  //   value={text}
  //   onChange={e => onChangeText(e.target.value)}
  // />
  <div id="textarea">
  <div className="mb-2 block">
<br></br>
  </div>
  <Textarea
    id="comment"
    placeholder="Insert a section here..."
    required={true}
    rows={10}
    cols={50}
  />
</div>

);

export default textEditor;
