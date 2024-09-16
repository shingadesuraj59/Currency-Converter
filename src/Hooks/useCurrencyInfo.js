import {useState, useEffect} from 'react';

// Custom Hook
function useCurrencyInfo(currency){
    const[data,setData]=useState({});   // {} is for avoid the program crash due to API error
        useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res)=>res.json())  // string is converted into json format
            .then((res)=>setData(res[currency]))   // hold the data
          
        },[currency])   // use dependancy array
       
        return data;

}
export default useCurrencyInfo;