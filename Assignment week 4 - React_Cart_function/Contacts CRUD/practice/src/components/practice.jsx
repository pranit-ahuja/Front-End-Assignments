import React, { useState } from 'react'

export const Practice = () => {
    const[count, setCount] = useState({
        count1:0,
        count2:6
    });
    const handleclick=(value)=>{
        if(value===1){
        setCount({...count,count1:count.count1+1});
        console.log(count);
        }
        else if(value===2){
            setCount({...count,count2:count.count2+1});
        console.log(count);
        }
    }
  return (
    <>
    <h1>{count.count1}</h1>
    <button onClick={()=>handleclick(1)}>Count</button>
    <h1>{count.count2}</h1>
    <button onClick={()=>handleclick(2)}>Count</button>
    </>
  );
}
export default Practice