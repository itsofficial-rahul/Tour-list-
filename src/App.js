import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Tour from './Tour';
import Loading from'./Loading'
function App() {
  const[data,setdata]=useState()
 const[load,setload]=useState(true)
  const url='https://course-api.com/react-tours-project'
  const fetchData=async ()=>{
    setload(true)
    try{
    const result = await fetch(url)
    const response= await result.json()
    setload(false)
    setdata(response)
    }
    catch{
      setload(false)
    }
  }
  function delet(id)
  {
     return setdata(data.filter((ele,i)=>ele.id!=id))
  }
  if(load)
  {
    <Loading />
  }
  useEffect(()=>{
    
    fetchData()
  },[])
 function reset()
 {
       fetchData()
 }
  return (
    <div className="App">
    <h1 className='Tour_Tag' >Tour list</h1>

        <Tour data2={data} removedata={delet} />
    
    
    {/* {
   data.length===0? <button onClick={()=>reset()} >Reset</button>:null
 } */}
    
    </div>
  );
}

export default App;
