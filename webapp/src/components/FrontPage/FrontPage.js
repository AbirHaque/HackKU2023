import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {flask_url, node_url} from '../../constants/apiurl'
import CreatableReactSelect from "react-select/creatable"
import { Label, FileInput } from 'flowbite-react';

const FrontPage = ({keywords, setKeywords}) => {

    const [file, setFile] = useState();
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        if (e.target.files){
            console.log(e.target.files[0]);
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
    
    <div class="py-10 text-center">
    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Welcome to <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Simpli</span><span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Scholar</span></h1>    
    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Get started by uploading your résumé or adding some of your existing skills!</p>
    </div>
    <div className="flex items-center justify-center">

      <div className="mt-4"></div>
      <div className="text-editor-view" class="w-1/2">

        <div id="fileUpload">
            <div className="mb-2 block">
                <Label
                htmlFor="file"
                />
            </div>
            <FileInput
                id="file-upload"
                type="file"
                onChange={handleFileChange}
            />
        </div>
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

        <div class="flex items-center justify-center w-full p-2">
            
            <button
                onClick={uploadPdfHandler}
                className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md mr-10"
            >
                Load Keywords from Resume
            </button>
            <button
                onClick={submitHandler}
                className="bg-indigo-500 text-white px-4 py-2 mt-4 rounded-md"
            >
                Submit
            </button>
        </div> 
      </div>

        

    </div>

    </>
  );
};

export default FrontPage;
