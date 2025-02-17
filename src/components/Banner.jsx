import { Link } from "react-router-dom"
import { useResultContext } from "../Context/Scroll"
export function Banner(){
    // const { resultRef } = useResultContext()
    // console.log(resultRef.current)
    return (
      <>
      <section className="banner-section">
        <div>
          
        </div>
        <h1>Find, Cook, Enjoy!</h1>
        <span>
            Search for any recipe, follow step-by-step instructions, <br />and master the art of cooking 
            with ease. <br />Your next delicious meal is just a search away
        </span>
        <Link to={"/recipes"}>
            <button >
                Search Recipes
            </button>
        </Link>                                                                                                                                              
      </section>
      </>
    )
  }