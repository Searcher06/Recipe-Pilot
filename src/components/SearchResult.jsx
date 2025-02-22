import { Link } from "react-router-dom"
import { Loader } from "./Loader";
import { ThemeContext } from "../Context/Context";
import { useResultContext } from "../Context/Scroll";
import { useContext } from "react";
function SearchResult({recipe,loading,error,recipes}) {
  const { resultRef } = useResultContext()
  const { theme } = useContext(ThemeContext)
  const rule = theme == "light" ? "black":"white"
  console.log("Mounted :",resultRef)
  
  
  return (
       <section className="search-result" ref={resultRef}>
        {
            loading ? <Loader /> : error ? <p id="error">{error}</p> : recipes == null ? <h1 id="ino" style={{fontStyle:"italic",textAlign:"center",color:rule}}>{error ? error:"Search for a recipe"}</h1> : 
            <>
            <div className="message">
               Result for: "{recipe}"
           </div>
           <div className="result-container">
               {recipes.map((current)=>{
                return(
                    <div className="recipe-card" key={current.id}>
                        <img src={current.image} alt="" style={{
                            width:"100%",height:"150px"
                        }}/>
                        <div className="recipe-name">
                            {current.title}
                        </div>
                        <div className="des" dangerouslySetInnerHTML={{__html:current.summary.slice(0,200)}}>
                        </div>
                        <div className="lower-des">
                        <Link to={`/recipeinfo/${current.id}`} style={{
                          color:"color:rgb(209, 58, 4)",textDecoration:"none",
                        }} id="view_link">view recipes</Link>
                        <p id="col"><i className="fa fa-clock" id="clock"></i> {current.readyInMinutes} mins</p>
                        </div>
                    </div>
                )
               })}
           </div>
            </>
        }
       </section>
    
  )
}

export default SearchResult