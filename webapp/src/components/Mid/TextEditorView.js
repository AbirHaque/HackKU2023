// src/components/textEditorView.js
import React, { useState } from 'react';
import Title from './Title';
import TextEditor from './TextEditor';
import NewButton from './NewButton';
import SaveButton from './SaveButton';
import GenerateButton from './GenerateButton';
import FilterOutButton from '../Footer/FilterView';
import axios from 'axios';


const TextEditorView = ({id}) => {
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
    var url="http://localhost:5000/graphql";
    if (id!=null){
      var mutation='mutation{updateComprehension(id:"'+id+'",comprehensionInput:{title:\"'+title+'\",text:\"'+text+'\",key_phrases:[],scraped_data:[],date:\"\"}){_id,title,key_phrases,scraped_data}}';
      //^^^^Not done
      axios.post(url,{"query":mutation})
      .then((res) => {
        id=res.data._id
      })

    }
    else{
      console.log("EXIST");
      var mutation='mutation{createComprehension(comprehensionInput:{title:\"'+title+'\",text:\"'+text+'\",key_phrases:[],scraped_data:[],date:\"\"}){_id,title}}';
      console.log(mutation);
      axios.post(url,{"query":mutation})
      .then((res) => {
        id=res.data.data.createComprehension._id
        //Set wiki things        
      })
    }
  
  };

  return (
    <div className="text-editor-view">
    <p class="text-center text-2xl text-gray-900 dark:text-white"><Title title={title} /></p>

      {/* <Title title={title} /> */}
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
