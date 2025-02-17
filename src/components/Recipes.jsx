import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchSection2 from "./SearchSection2";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";
import { useState,useEffect } from "react";
 export function Recipes() {
  const { theme } = useContext(ThemeContext);
  const [input, setInput] = useState("")
      const [recipe, setRecipe] = useState("")
      const [recipes, setRecipes] = useState(null)
      const [loading, setLoading] = useState();
      const [error, setError] = useState(null);
      const [empty,setEmpty] = useState(true)
      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&number=6&apiKey=cf1326b2aabc4e33b90cd9882679e059`
      useEffect(() => {
          if (recipe == "") {
              console.log("empty search query")
              setLoading(false)
          } else {
              fetch(url).then((response) => {
                  if (!response.ok) {
                      throw new Error("Network error")
                  }
                  setLoading(true)
                  return response.json()
              }).then((data) => {
                  setRecipes(data)
                  console.log(data)
                  let result = data.results;
                  let ids = result.map((current) => current.id).toString()
                  console.log(ids);
                  return ids;
              }).then((idss) => {
                  fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${idss}&apiKey=cf1326b2aabc4e33b90cd9882679e059`).then((response) => {
                      return response.json()
                  }).then((dat) => {
                      setRecipes(dat)
                      setLoading(false)
                  })
              }).catch((err) => {
                  console.log(err.message)
                  setError(err.message)
                  setLoading(false)
              })
          }
      }, [recipe, url,empty])
  return (
    <>
    <div style={{
      background:theme === "light" ? "white":"#1e1e1e",width:"100%"
    }}>
    <Navbar />

    <div className="maincontent">
        <SearchSection2 input={input} setInput={setInput} 
        recipe={recipe} empty={empty} setEmpty={setEmpty}
        setRecipe={setRecipe} setLoading={setLoading} loading={loading} error={error} recipes={recipes} />
    
    </div>
    <Footer />
    </div>
    </>
  )
}
