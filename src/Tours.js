import { useState } from "react"
import './App.css';
function Tours({id,name,image,info,removedata})
{
    const [readmore,setreadmore] =useState(false)

    return(
        <div className="list">
        <img src={image} width="200" heigth="200" ></img>
        <h2>{name}</h2>
       {
           readmore?info:`${info.substring(0,200) }......`
         
   }
        <button style={{border:"none", color:"blue",backgroundColor:"white" }} onClick={()=>setreadmore(!readmore) } >{readmore?"show less":"show more"}</button>
      <button onClick={()=>removedata(id)} >delet</button>
        </div>
    )
}
export default Tours