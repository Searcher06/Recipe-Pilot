import Categories from "./Categories"
import Services from "./Services"
import Reviews from "./Reviews"
import { useEffect, useState } from "react"
import { Banner } from "./banner"

export function MainContent() {
    let [input, setInput] = useState("")
    let [recipe, setRecipe] = useState("")
    let [recipes, setRecipes] = useState(null)
    let [loading, setLoading] = useState();
    let [error, setError] = useState(false);
    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&number=6&apiKey=cf1326b2aabc4e33b90cd9882679e059`
    useEffect(() => {
        if (recipe == "") {
            return
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
            })
        }
    }, [recipe, url])
    return <>
        <div className="maincontent" style={{width:"100%"}}>
            <Banner />
            <Categories />
            <Services />
            <Reviews />
        </div>
    </>
}