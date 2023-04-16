import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {flask_url, node_url} from '../../constants/apiurl'
import CreatableReactSelect from "react-select/creatable"

const FrontPage = ({keywords, setKeywords}) => {

    const [file, setFile] = useState();
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        if (e.target.files){
            setFile(e.target.files[0]);
        }
    }

    const uploadPdfHandler = () => {

        var formData = new FormData();
        formData.append("pdfFile", file);
            axios.post(`${node_url}extract-text`, formData)
            .then((response) => {
                console.log(response);
                axios.post(`${flask_url}get_keywords`, {text: response.data, num_phrases: 5})
                     .then(keywordData => {
                        console.log(keywordData)
                        setKeywords(keywordData.data.keywords);
                     })
                
              }, (error) => {
                console.log(error);
              });
        
        
        };

        const submitHandler = () => {
            navigate("/dashboard")
        }

        

        // const doc = pdfjsLib.getDocument(file);
        // let pageTexts = Array.from({length: doc.numPages}, async (v,i) => {
        //     return (await (await doc.getPage(i+1)).getTextContent()).items.map(token => token.str).join('');
        // });
        // console(await Promise.all(pageTexts)).join('');


  return (
    
    <>
    <div className="container mx-auto px-4 py-5">
      <div className="text-editor-view">
        <label
          htmlFor="file-upload"
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Choose File
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <button
        onClick={uploadPdfHandler}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md"
      >
        Load Keywords from Resume
      </button>
      <div className="mt-4"></div>
    
       
        <CreatableReactSelect 
            isMulti
            onCreateOption = {knownKeyword => {
                setKeywords(prev => [...prev, knownKeyword])
            }}
            placeholder={"Add your skills and existing knowledge..."}
            value={keywords.map((kw) => {
                return {label: kw}
            })}
            onChange={kws => {
                setKeywords(kws.map(kw => {
                    return {label: kw}
                }))
            }}

        />
        <button
        onClick={submitHandler}
        className="bg-indigo-500 text-white px-4 py-2 mt-4 rounded-md"
      >
        Submit
      </button>
    </div>

             

    </>
  );
};

export default FrontPage;
