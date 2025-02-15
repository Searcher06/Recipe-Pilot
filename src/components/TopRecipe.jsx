import { useContext } from "react";
import { TopRecipeContext } from "../Context/TopRecipeContext";
export function TopRecipe(){
    const { recipe,loading,error } = useContext(TopRecipeContext);
    if(loading)return <h1>loading...</h1>
    if(error)return <h1>{error}</h1>
    if(recipe.length == 0) return <h1>wait or refresh the page</h1>
    return <section className="seasonal-recipe">
    <h1 id="seas">Top trending <i className="fas fa-star"></i></h1>
    <div className="top-trending-container">
        {
            recipe[0].results.slice(6,12).map((current)=>{
                return <div className="recipe-card" key={current.id}>
                             <img src={current.image} alt="" style={{
                                 width:"100%",height:"150px"
                             }}/>
                             <div className="recipe-name">
                                 {current.title}
                             </div>
                             
                             <div className="lower-des">
                                 <p>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>
                                 <p id="time"><i className="fa fa-clock"></i> 20 mins</p>
                             </div>
                         </div>
            })
        }
    </div>
</section>
}
