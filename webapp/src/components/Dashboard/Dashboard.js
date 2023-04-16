import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CompositionListView from '../Composition/CompositionListView';
import TextEditorView from '../Mid/TextEditorView';
import WikiListView from '../Wiki/WikiListView';
import FilterOutButton from '../Footer/FilterView';
import { TextInput } from 'flowbite-react';

const Dashboard = () => {

  const [compTitles, setCompTitles] = useState([]);

  useEffect(()=> {
    axios.get("http://localhost:5000/graphql"+"?"+"query"+"={comprehensions{_id,title}}")
         .then((res)=> {
            setCompTitles(res.data.data.comprehensions.map(comp => comp.title))
            // console.log(res.data.data.comprehensions.map(comp => comp.title))
         })
  }, [])

  return (
    <>
    <div className="p-4">
    <p className="text-gray-900 text-4xl dark:text-white">SimpliScholar</p>
    
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
      
        <CompositionListView titles={compTitles}/></div>
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
        <WikiListView/>
      </div>
  </div>

</div>

    </div>
    </>
  );
};

export default Dashboard;