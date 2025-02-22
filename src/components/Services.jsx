import { useContext, useEffect } from "react";
import Aos from "aos";
import { ThemeContext } from "../Context/Context";
const Services = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, // Animation speed (1 second)
          once: false, // Animation happens on every scroll
          mirror: true, // Animation plays when scrolling up
        });
    
        Aos.refresh(); // Ensures AOS updates on route changes
      }, []);
  const { theme } = useContext(ThemeContext)
  const rule = theme == "light" ? "black":"white"
  
  return (
    <>
        <section className="services">
            <div className="umbrella"></div>
            <div className="message"><p style={{color:rule}}>What we offer</p></div>
            <div className="services-container">
                <div className="boxes" data-aos="zoom-in">
                    <div className="icon">
                        <i className="fas fa-basket-shopping"></i>
                    </div>
                    <div className="service-name">
                        Recipe Search
                    </div>
                    <div className="full-des">
                        Quickly find your favorite recipes by searching their names. Explore a vast collection of dishes, from traditional meals to modern favorites.  
                        Whether you crave a classic dish or want to try something new, our search makes discovering recipes effortless. Get started now!
                    </div>
                </div>

                <div className="boxes" data-aos="zoom-in">
                    <div className="icon">
                        <i className="fas fa-utensils"></i>
                    </div>
                    <div className="service-name">
                        Category-based recipe discovery
                    </div>
                    <div className="full-des">
                        Browse through various categories like breakfast, lunch, or dessert to find recipes that match your cravings.  
                        Each category is filled with expertly curated dishes, making it easy to cook something delicious every time.
                    </div>
                </div>

                <div className="boxes" data-aos="zoom-in">
                    <div className="icon">
                        <i className="fas fa-list-ul"></i>
                    </div>
                    <div className="service-name">
                        Step-by-step cooking instructions
                    </div>
                    <div className="full-des">
                        Get clear, easy-to-follow instructions that guide you through every step of cooking your favorite meals.  
                        Whether you're a beginner or an experienced cook, our detailed steps ensure perfect results every time.
                    </div>
                </div>

                <div className="boxes" data-aos="zoom-in">
                    <div className="icon">
                        <i className="fas fa-bookmark"></i>
                    </div>
                    <div className="service-name">
                        Save and favorite recipes
                    </div>
                    <div className="full-des">
                        Never lose track of your favorite recipes again. Save the ones you love and access them anytime, anywhere.  
                        Your personal collection makes meal planning simple and ensures you're always ready to cook something great.
                    </div>
                </div>

            </div>
        </section>
    </>
  );
};

export default Services;
