import React from 'react'

import Card from './Card'



function Transaction({filter}) {

  
  return (
    <div className="container  mx-auto w-full  ">

        
        

         
         
       {filter.map((cost) => {
          return (
            <div className="" key={cost.id}>
              <Card cost={cost} index={cost.id} />
            </div>
          );
        })}
          
      

           

         
       

       
          
     
    </div>
   
  )
}

export default Transaction