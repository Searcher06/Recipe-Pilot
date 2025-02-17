import { Link } from "react-router-dom"
import { Loader } from "./Loader";
import { useResultContext } from "../Context/Scroll";
function SearchResult({recipe,loading,error,recipes}) {
  const { resultRef } = useResultContext()
  console.log("Mounted :",resultRef)
  if(loading) return <Loader />
  if(error) return <p id="error">{error}</p>
  if(recipes == null) return <h1 id="ino" style={{fontStyle:"italic"}} ref={resultRef}>search for a recipe</h1>
  
  return (
       <section className="search-result" ref={resultRef}>
        {
            loading ? <Loader /> : error ? <p id="error">{error}</p> : recipes == null ? <h1 id="ino" style={{fontStyle:"italic"}}>search for a recipe</h1> : 
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
                        }}>view recipes</Link>
                        <p id="col"><i className="fa fa-clock"></i> {current.readyInMinutes + "mins"}</p>
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