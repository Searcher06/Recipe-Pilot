import { createContext,useState,useEffect } from "react"
export const LunchContext = createContext()
export function LunchProvider({ children }){
  const [lunch,setlunch] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)
  useEffect(()=>{
    
    const testUrl = "./public/breakfast.json"
    const apiKey = "cf1326b2aabc4e33b90cd9882679e059"
    const url = `https://api.spoonacular.com/recipes/complexSearch?type=lunch&number=7&apiKey=${apiKey}`;
    
    if(lunch.length == 0){
    console.log("Fetching...")
    fetch(url).then((response)=>response.json()).then((data)=>{
      setlunch((prevState)=>([...prevState,{...data}]))
      setLoading(false)
    }).catch((err)=>{
      setError(err.message)
      setLoading(false)
    })
  }
  },[])
  console.log("Lunch : ",lunch)
  return <LunchContext.Provider value={{lunch,loading,error}}>
  {children}
  </LunchContext.Provider>
}


// const apiKey="cf1326b2aabc4e33b90cd9882679e059"
// const url = `https://api.spoonacular.com/recipes/complexSearch?type=lunch&number=5&apiKey=${apiKey}`;