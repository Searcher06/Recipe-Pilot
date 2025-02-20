import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-router-dom";

export function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed (1 second)
      once: true, // Ensures animation runs only once
    });
  }, []);

  return (
    <section className="banner-section">
      <div data-aos="fade-up">
        <h1>Find, Cook, Enjoy!</h1>
      </div>
      
      <span data-aos="fade-in">
        Search for any recipe, follow step-by-step instructions, <br />
        and master the art of cooking with ease. <br />
        Your next delicious meal is just a search away.
      </span>
      
      <Link to={"/recipes"}>
        <button data-aos="zoom-in">Search Recipes</button>
      </Link>
    </section>
  );
}
