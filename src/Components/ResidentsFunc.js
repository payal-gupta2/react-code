import React, { useState } from 'react';
import useEffectOnlyOnce from './EffectOnlyOnce ';

function ResidentsFunc(props) {
  
  const [residents, setResidents] = useState([]);
  const array = [];

  const getDetails = (arr,k) => {
    let url = arr[k];
    fetch(url)
    .then((res) => res.json()).then((response) => {            
      if(response.name) {
        array.push(response.name);
        k++;
        if(k < arr.length) {
          getDetails(arr,k);     
        }
        if(k === arr.length-1) {
            setResidents(residents => [...residents, ...array]);
        }
      }
    });        
  }
  useEffectOnlyOnce(()=>getDetails(props.residents,0));
  
  return(
    <>
      {residents.length?        
      <p>
        <strong>residents:</strong>
        {residents.map((item, index)=>{
          return <span key={item+'_'+index}>{item}</span>
        })}
      </p>:false}
    </>
  )
}
export default ResidentsFunc;