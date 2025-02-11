import { Link } from "react-router-dom"
function Banner(){
  
    return (
      <>
      <section className="banner-section">
        <h1>Find, Cook, Enjoy!</h1>
        <span>
            Search for any recipe, follow step-by-step instructions, <br />and master the art of cooking 
            with ease. <br />Your next delicious meal is just a search away!
        </span>
        <Link to={"/recipes"}>
            <button>
                Search Recipes
            </button>
        </Link>                                                                                                                                              
      </section>
      </>
    )
  }
  
  export default Banner