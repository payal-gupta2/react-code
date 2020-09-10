import React, { useState, useEffect, useMemo } from 'react';
import ResidentsFunc from './Components/ResidentsFunc';
function AppFunc() {
    
    const [val, setVal] = useState(0);

    const [result, setResult] = useState([]);
    useEffect(() => {
        let url = "https://swapi.dev/api/planets/";
        fetch(url)
        .then((res) => res.json())
        .then((response) => {
            //  console.log(response);
            setResult(response.results);
        });
        }, []);

    function increment() {
        setVal(val+1);
    }
    
    const mymemo = useMemo(()=> {
        return (result.map((item) => {
            return <li key={item.name + "_"}>{item.name}             
                    <ResidentsFunc residents={item.residents}/>
            </li>;
        }));
    },[result])

    return(
        <>
        <ul>
            {/* {result.map((item) => {
             return <li key={item.name + "_"}>{item.name}             
                    <ResidentsFunc residents={item.residents}/>
            </li>;
             })} */}
             {mymemo}
        </ul>
        <button onClick={increment}>Click me</button>
            <p>increment val is {val}</p>
        </>
    );
}
export default AppFunc;