import { createContext, useEffect, useState } from "react";

export const TopRecipeContext = createContext()

export function TopRecipeProvider({ children }){
    const [recipe,setRecipe] = useState([]);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
    const testUrl = "./public/breakfast.json"
    
    if(recipe.length == 0){
    fetch(testUrl).then((response)=>response.json()).then((data)=>{
      setRecipe((prevState)=>([...prevState,{...data}]))
      setLoading(false)
    }).catch((err)=>{
      setError(err.message)
      setLoading(false)
    })
  }
},[])
return <TopRecipeContext.Provider value={{recipe,loading,error}}>
    { children }
</TopRecipeContext.Provider>
}

