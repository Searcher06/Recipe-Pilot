import bg from "../bgs/recipeBG.jpeg";
import Categories from "./Categories";
import SearchResult from "./SearchResult";
import { Quickmeal } from "./Quickmeal";
import { TopRecipe } from "./TopRecipe";
import { useResultContext } from "../Context/Scroll";

function SearchSection2({recipe,recipes,loading,setLoading,error,setRecipe,input,setInput,setEmpty}) {
    const { resultRef } = useResultContext()
      function fetch(){
        resultRef.current.scrollIntoView({ behavior:"smooth",block:"center" })
      }
  return (
    <>
    <section className="search-section" style={{
        backgroundImage:`url(${bg})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
    }}>
        <h1>Start exploring !</h1>
        <div className="searchContainer">
            <input type="search" placeholder="Search recipe" onChange={(event)=>{
                setInput(event.target.value) 
            }} value={input}/>
            <button onClick={()=>{
                setRecipe(input)
                setInput("")
                setLoading(true)
                fetch()
                recipe == "" ? (setEmpty((prevState)=>!prevState)):setEmpty(recipe)
            }}><i className="fas fa-search"></i></button>
        </div>
        <p>search any recipe eg burger, pizza, sandwich</p>
    </section>

    <div className="maincontent">
            <SearchResult recipe={recipe} loading={loading} error={error} recipes={recipes}/>
    </div>

    <section className="quickmeal">
        <div className="message">
            <h1 id="im">Are you in a hurry  <i className="far fa-clock"></i></h1>
            <p>check out some quick meals ready in 3 mins</p>
        </div>
        <Quickmeal />
    </section>

    <TopRecipe />

    <section className="maincontent">
        <Categories />
    </section>

    </>
  )
}

export default SearchSection2