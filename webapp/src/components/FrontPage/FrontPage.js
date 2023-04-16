import React, { useState } from 'react';
import axios from 'axios';
import url from '../../constants/apiurl'

const FrontPage = () => {

    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        if (e.target.files){
            setFile(e.target.files[0]);
        }
    }

    const submitPdfHandler = () => {

        var formData = new FormData();
        formData.append("pdfFile", file);
            axios.post(`${url}extract-text`, formData)
            .then((response) => {
                console.log(response);
              }, (error) => {
                console.log(error);
              });
        
        
        };

        

        // const doc = pdfjsLib.getDocument(file);
        // let pageTexts = Array.from({length: doc.numPages}, async (v,i) => {
        //     return (await (await doc.getPage(i+1)).getTextContent()).items.map(token => token.str).join('');
        // });
        // console(await Promise.all(pageTexts)).join('');


  return (
    
    <>
        <div className="text-editor-view">
        <input type="file" onChange={handleFileChange}></input>
        </div>
        <button onClick={submitPdfHandler}>Click me</button>
    </>
  );
};

export default FrontPage;
