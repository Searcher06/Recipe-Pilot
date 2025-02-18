import { createContext,useState,useEffect } from "react"
export const BreakfastContext = createContext()
export function BreakfastProvider({ children }){
  const [breakfast,setBreakfast] = useState([])
  const [bloading,setbLoading] = useState(true)
  const [berror,setbError] = useState(null)
  useEffect(()=>{
    
    const testUrl = "./public/breakfast.json"
    const apiKey = "cf1326b2aabc4e33b90cd9882679e059"
    const url = `https://api.spoonacular.com/recipes/complexSearch?type=breakfast&number=7&apiKey=${apiKey}`
    if(breakfast.length == 0){
    fetch(url).then((response)=>response.json()).then((data)=>{
      setBreakfast((prevState)=>([...prevState,{...data}]))
      setbLoading(false)
    }).catch((err)=>{
      setbError(err.message)
      setbLoading(false)
    })
  }
  },[])
  console.log(breakfast)
  return <BreakfastContext.Provider value={{breakfast,bloading,berror}}>
  {children}
  </BreakfastContext.Provider>
}


// const apiKey="cf1326b2aabc4e33b90cd9882679e059"
// const url = `https://api.spoonacular.com/recipes/complexSearch?type=breakfast&number=5&apiKey=${apiKey}`;