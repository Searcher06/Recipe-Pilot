import { createContext, useEffect, useState } from "react";

export const QuickRecipeContext = createContext()

export function QuickProvider({ children }){
    const [recipe,setRecipe] = useState([]);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const apiKey="cf1326b2aabc4e33b90cd9882679e059"

    const url = `https://api.spoonacular.com/recipes/complexSearch?maxReadyTime=10&number=5&apiKey=${apiKey}`

    useEffect(()=>{
    const testUrl = "./public/breakfast.json"
    
    if(recipe.length == 0){
    fetch(url).then((response)=>response.json()).then((data)=>{
      setRecipe((prevState)=>([...prevState,{...data}]))
      setLoading(false)
    }).catch((err)=>{
      setError(err.message)
      setLoading(false)
    })
  }
},[])
return <QuickRecipeContext.Provider value={{recipe,loading,error}}>
    { children }
</QuickRecipeContext.Provider>
}

