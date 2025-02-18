import { Link } from "react-router-dom";
import { useContext } from "react";
import { BreakfastContext } from "../Context/BreakfastContext";
import { Loader } from "./Loader";
export function Breakfast({ setCategory,category }){
    const border =  "2px solid rgb(211, 62, 3)"
  
    const {bloading,berror,breakfast} = useContext(BreakfastContext)
    
    return <section className="categories">
    <div className="linkss">
     <p tabIndex={0} style={{
      borderBottom:category == "breakfast" ? border:"none"
     }} onClick={()=>{setCategory("breakfast");}}>Breakfast</p>
     <p tabIndex={0} style={{
      borderBottom:category == "lunch" ? border:"none"
     }} onClick={()=>{setCategory("lunch")}}>Lunch</p>
     <p tabIndex={0} style={{
      borderBottom:category == "lunch" ? border:"none"
     }} onClick={()=>{setCategory("dinner")}}>Dinner</p>
    </div>
    <div className="output">
      {/* <h1>never give up 😈</h1> */}
       {bloading ? <Loader /> : berror ? `${berror}` : breakfast.length == 0 ? <Loader /> :
       
       breakfast[0].results.map((current)=>{
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
                              <Link className="custom_link" to={`/recipeinfo/${current.id}`} style={{
                                
                              }}>see more</Link>
                            </div>
                     </div>
                     
               </div>
       })}
    </div>
</section>
}