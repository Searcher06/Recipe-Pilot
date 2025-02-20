import { useContext } from "react"
import { Link } from "react-router-dom"
import { QuickRecipeContext } from "../Context/QuickRecipeContext"
import { Loader } from "./Loader"
export function Quickmeal(){
    const {recipe,loading,error} = useContext(QuickRecipeContext)
    if(loading)return <Loader />
    if(error)return <p style={{textAlign:"center"}}>{"Network Error"}</p>
    if(recipe.length == 0) return <p>Wait or reload the page</p>
    return  <div className="quickmeal-container">
        {recipe[0].results.slice(0,5).map((current)=>{
     return <div className="recipe-card" key={current.id}>
                 <img src={current.image} alt="" style={{
                     width:"100%",height:"150px"
                 }}/>
                 <div className="recipe-name">
                     {current.title}
                 </div>
                 <div className="clicks">
                  <div className="ratings">
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="button-view">
                    <Link to={`/recipeinfo/${current.id}`} style={{
                      height: "30px",
                      display:"flex",
                      border: "none",
                      borderRadius: "4px",
                      backgroundColor: "rgb(211, 62, 3)",
                      color:"white",
                      cursor: "pointer",
                      textDecoration:"none",
                      justifyContent:"center",
                      alignItems:"center",
                      width:"60px",
                      fontSize:"14px"
                    }}>see more</Link>
                  </div>
                 </div>
           </div>
   })}
    </div>
}