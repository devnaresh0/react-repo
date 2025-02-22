import { useEffect,useState } from "react";

function useCurruncyInfo(curruncy) {
 const [data,setData] = useState({});
 useEffect(() => {
  fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`
  ).then((res)=> res.json())
  .then((res)=> setData(res[curruncy]))

 },[curruncy])
 console.log(data);
 
 return data;
}

export default useCurruncyInfo