import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CompositionListView from '../Composition/CompositionListView';
import TextEditorView from '../Mid/TextEditorView';
import WikiListView from '../Wiki/WikiListView';
import FilterOutButton from '../Footer/FilterView';
import { TextInput } from 'flowbite-react';

const Dashboard = () => {

  const [comps, setComps] = useState([]);
  const [wikiData, setWikiData] = useState([]);
  const [currentCompIndex, setCurrentCompIndex] = useState();

  useEffect(()=> {
    axios.get("http://localhost:5000/graphql"+"?"+"query"+"={comprehensions{_id,title}}")
         .then((res)=> {
            setComps(res.data.data.comprehensions.map(comp => {return {id: comp._id, title: comp.title}}))
            //handleCompChange(res.data.data.comprehensions[1]._id)
            //setCurrentCompId(res.data.data.comprehensions.)
            console.log(res.data.data.comprehensions)
         })
  }, [])


  const handleCompChange = (index) => {
    axios.get(`http://localhost:5000/graphql?query={comprehension(_id:"${comps[index].id}"){scraped_data}}`)
          .then((res) => {
            console.log(res.data.data.comprehension.scraped_data[0])
            // let scraped_data = res.data.data.comprehension.scraped_data;
            // setWikiData(scraped_data.map(article => {return {title: article.topic, content: article.summary}}));
            // setCurrentCompIndex(index);
        })
  }


  return (
    <>
    <div className="p-4">
    <p className="text-gray-900 text-4xl dark:text-white"><a href="/">📜SimpliScholar</a></p>
    
    <br>
    </br>
    
  <div class="col-span-6 bg-gray-50 rounded p-4">
  <div class="justify-self-end">
        <div className='FilterOutButton'></div>
        <FilterOutButton/>
        </div>
  </div>
  <br></br>

    {/* <div class="grid grid-cols-3 gap-8">
    <div class="col-span-1 bg-gray-200 rounded p-4">
      <div class="justify-self-start">        
      <div className='CompositionListView'></div>
        <CompositionListView/></div>
      </div>
      <div class="justify-self-center">
      <div className='TextEditorView'></div>
        <TextEditorView/>
      </div>
      <div class="justify-self-end">
        <div className='WikiListView'></div>
        <WikiListView/>
      </div>
    </div> */}
    <div class="grid grid-cols-6 gap-4">
      
  <div class="col-span-1 bg-gray-50 rounded p-4">
      <div class="justify-self-start">        
      <div className='CompositionListView'></div>
      
        <CompositionListView comps={comps} handleCompChange={handleCompChange}/></div>
  </div>
  <div class="col-span-3 bg-gray-50 rounded p-4">
  <div class="justify-self-center">
      <div className='TextEditorView'></div>
        <TextEditorView/>
      </div>
  </div>
  <div class="col-span-2 bg-gray-50 rounded p-4">
          <div class="justify-self-end">
        <div className='WikiListView'></div>
        <WikiListView wikiData={wikiData}/>
      </div>
  </div>

</div>

    </div>
    </>
  );
};

export default Dashboard;