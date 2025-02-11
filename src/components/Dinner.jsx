import { Link } from "react-router-dom";
import { useContext } from "react";
import { DinnerContext } from "../Context/DinnerContext";
import { Loader } from "./Loader";
export function Dinner({ setCategory,category }){
  const border =  "2px solid rgb(211, 62, 3)"

    const {loading,error,dinner} = useContext(DinnerContext)
    loading && <Loader />
    error && <h1>{error}</h1>
    if(dinner.length == 0) return <Loader />
    return <section className="categories">
    <div className="linkss">
     <p tabIndex={0} style={{
      borderBottom:category == "breakfast" ? border:"none"
     }} onClick={()=>{setCategory("breakfast");}}>Breakfast</p>
     <p tabIndex={0} style={{
      borderBottom:category == "lunch" ? border:"none"
     }} onClick={()=>{setCategory("lunch")}}>Lunch</p>
     <p tabIndex={0} style={{
      borderBottom:category == "dinner" ? border:"none"
     }} onClick={()=>{setCategory("dinner")}}>Dinner</p>
    </div>
    <div className="output">
      {/* <h1>never give up 😈</h1> */}
       {dinner[0].results.slice(12,18).map((current)=>{
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
</section>
}