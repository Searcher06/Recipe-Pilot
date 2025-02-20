import { useContext } from "react";
import { Loader } from "../components/Loader"
import { TopRecipeContext } from "../Context/TopRecipeContext";
import { Link } from "react-router-dom";
export function TopRecipe(){
    const { recipe,loading,error } = useContext(TopRecipeContext);
    if(loading)return <Loader />
    if(error)return <h3>failed to load top rated recipes</h3>
    if(recipe.length == 0) return <h3>wait or refresh the page</h3>
    return <section className="seasonal-recipe">
    <h1 id="seas">Top trending <i className="fas fa-star"></i></h1>
    <div className="top-trending-container">
        {
            recipe[0].results.slice(1,9).map((current)=>{
                let num = Math.random() * 10
                return <div className="recipe-card" key={current.id}>
                             <img src={current.image} alt="" style={{
                                 width:"100%",height:"150px"
                             }}/>
                             <div className="recipe-name">
                                 {current.title}
                             </div>
                             
                             <div className="lower-des">
                                 <p>
                                    <i className="fas fa-heart"></i>
                                    <span>{num.toFixed(2)}k</span>
                                </p>
                                 <Link to={`/recipeinfo/${current.id}`} className="custom_link">see more</Link>
                             </div>
                         </div>
            })
        }
    </div>
</section>
}
