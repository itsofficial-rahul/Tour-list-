import Tours from "./Tours";

function Tour({data2,removedata})
{   
   console.log(data2);
    return(
     <div>
         {
             data2.map((ele)=>{
                 return (
                    <div key={ele.id} >
                      <Tours key={ele.id} {...ele} removedata={removedata} />
                    </div>
                 )
             })
         }
      
     </div>    




    )
}
export default Tour