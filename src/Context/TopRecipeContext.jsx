import { createContext, useEffect, useState } from "react";

export const TopRecipeContext = createContext()

export function TopRecipeProvider({ children }){
    const [recipe,setRecipe] = useState([]);
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const apiKey="cf1326b2aabc4e33b90cd9882679e059"
    let url2 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=cf1326b2aabc4e33b90cd9882679e059&sort=popularity`

    const url = `https://api.spoonacular.com/recipes/random?${apiKey}&number=10&minHealthScore=50&minLikes=100&maxReadyTime=30
`
    useEffect(()=>{
    const testUrl = "./breakfast.json"
    
    if(recipe.length == 0){
    fetch(url2).then((response)=>response.json()).then((data)=>{
      setRecipe((prevState)=>([...prevState,{...data}]))
      setLoading(false)
    }).catch((err)=>{
      setError(err.message)
      setLoading(false)
    })
  }
},[])
console.log("Top Recipes",recipe)
return <TopRecipeContext.Provider value={{recipe,loading,error}}>
    { children }
</TopRecipeContext.Provider>
}

