import { createContext, useEffect, useState } from "react";

export const DinnerContext = createContext()

export function DinnerProvider({ children }){
    const [dinner,setDinner] = useState([]);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
    const testUrl = "./public/breakfast.json"
    const apiKey = "cf1326b2aabc4e33b90cd9882679e059"
    const url = `https://api.spoonacular.com/recipes/complexSearch?type=lunch&number=7&apiKey=${apiKey}`;
    if(dinner.length == 0){
    fetch(url).then((response)=>response.json()).then((data)=>{
      setDinner((prevState)=>([...prevState,{...data}]))
      setLoading(false)
    }).catch((err)=>{
      setError(err.message)
      setLoading(false)
    })
  }
},[])
console.log("Dinner",dinner)
return <DinnerContext.Provider value={{dinner,loading,error}}>
    { children }
</DinnerContext.Provider>
}

