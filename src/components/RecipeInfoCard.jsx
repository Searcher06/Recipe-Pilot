import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Loader } from "./Loader";
export function RecipeInfoCard(){
    let [recipe,setRecipe] = useState();
    let [loading,setLoading] = useState(true)
    let [error,setError] = useState(null)
    const { id } = useParams()
    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=cf1326b2aabc4e33b90cd9882679e059`).then((response)=>{
            return response.json()
        }).then((data)=>{
            setLoading(false)
            setRecipe(data)
        }).catch((err)=>{
            setError(err.message)
            setLoading(false)
        })
    },[])
    if(loading)return <Loader />
    if(error)return <h1>{error}</h1>
    return (

        <>
            <Navbar />
            <div className="recipe-info-card">
                <img  className={"recipe-img"} src={recipe.image} alt="" />
                <div className="recipe-title">
                    {recipe.title}
                </div>
                <div className="summary" dangerouslySetInnerHTML={{__html:recipe.summary}}>
        
                </div>
                <div className="recip-info">
                    <p id="add">Recipe info</p>
                    <div className="infos">
                        <p className="infos-container">
                            <p><span>Dish type</span> : {recipe.dishTypes[1]} <i className="fas fa-bread-slice"></i></p>
                            <p><span>Diet</span> : {recipe.vegetarian ? "vegetarian":"non vegetarian"} <i className="fas fa-drumstick-bite"></i></p>
                            <p><span>Cuisines</span> : {recipe.cuisines.map((current)=>current)} </p>
                            <p><span>Spoonacular score</span> : {Math.floor(recipe.spoonacularScore)}</p>
                            <p><span>Servings</span> : {recipe.servings} </p>
                        </p>
                    </div>
                </div>
        
                <div className="ingredients">
                    <p id="ing">Ingredients</p>
                    {
                        <ol>
                            {
                                recipe.extendedIngredients.map((current)=>{
                                    const query = current.image
                                    
                                    return <li key={crypto.randomUUID()}>
                                        <div>
                                            <p>{current.original}</p>
                                            <img src={`https://spoonacular.com/cdn/ingredients_500x500/${query}`} alt={current.image} />
                                        </div>
                                    </li>
                                })
                            }
                        </ol>
                    }
                    
                </div>
        
                <div className="analyzed-instruction">
                    <p id="ins">Cooking instructions</p>
                    <div className="instructions">
                        <ol>
                            {
                                recipe.analyzedInstructions[0].steps.map((current)=>{
                                    return <li key={crypto.randomUUID()}>
                                        <p style={{width:"500px"}}>{current.step}</p>
                                        <div className="ingredient-imge">
                                            {current.ingredients.map((ingredient)=>{
                                                const url = ingredient.image.startsWith("https:") ? ingredient.image:`https:spoonacular.com/cdn/ingredients_500x500/${ingredient.image}`
                                                return <img src={url} alt="" key={crypto.randomUUID()}/>
                                            })}
                                        </div>
                                    </li>
                                })
                            }
                        </ol>
                    </div>
                </div>
                <div className="buttons">
                    <div className="left"><i className="fas fa-heart"></i></div>
                    <div className="right">
                        <button>
                            Print
                        </button>
                        <button>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </> 
    )
}

