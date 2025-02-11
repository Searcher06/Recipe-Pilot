import { createContext, useEffect, useState } from "react";

export const DinnerContext = createContext()

export function DinnerProvider({ children }){
    const [dinner,setDinner] = useState([]);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
    const testUrl = "./public/breakfast.json"
    
    if(dinner.length == 0){
    fetch(testUrl).then((response)=>response.json()).then((data)=>{
      setDinner((prevState)=>([...prevState,{...data}]))
      setLoading(false)
    }).catch((err)=>{
      setError(err.message)
      setLoading(false)
    })
  }
},[])
return <DinnerContext.Provider value={{dinner,loading,error}}>
    { children }
</DinnerContext.Provider>
}

