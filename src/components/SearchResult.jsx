import { Link } from "react-router-dom"
import { Loader } from "./Loader"

// import { useState } from "react";
function SearchResult({recipe,loading,error,recipes}) {
  // let [show,setShow] = useState({})
  // function handleShow(id){
  //   setShow((prevState)=>({...prevState,[id]:!prevState[id]}))
  // }
  if(loading) return <Loader />
  if(error) return <h1>{error}</h1>
  if(recipes == null) return <h1 style={{fontStyle:"italic"}}>search for a recipe</h1>
  
  return (
    <>
       <section className="search-result">
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
                        {/* <p id="see-more" onClick={()=>{
                          handleShow(current.id)
                        }}>See More </p> */}
                        <Link to={`/recipeinfo/${current.id}`} style={{
                          color:"color:rgb(209, 58, 4)",textDecoration:"none",
                        }}>view recipes</Link>
                        <p id="col"><i className="fa fa-clock"></i> {current.readyInMinutes + "mins"}</p>
                        </div>
                    </div>
                )
               })}
           </div>
       </section>
    </>
  )
}

export default SearchResult