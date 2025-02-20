import { useEffect } from "react";
import Aos from "aos";
const Services = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, // Animation speed (1 second)
          once: false, // Change to false so animation happens every scroll
          mirror: true, // Animation plays when scrolling up
        });
    
        Aos.refresh(); // Ensures AOS updates on route changes
      }, []);
  return (
    <>
        <section className="services">
            <div className="umbrella"></div>
            <div className="message"><p>What we offer <i className="fas fa-gift"></i></p></div>
            <div className="services-container">
                <div className="boxes" data-aos="zoom-in">
                    <div className="icon">
                        <i className="fas fa-basket-shopping"></i>
                    </div>
                    <div className="service-name">
                        Recipe search by ingredients
                    </div>
                    <div className="full-des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis explicabo facere est dolores possimus, quis cum quo animi suscipit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore a in. 
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis explicabo facere est dolores possimus, quis cum quo animi suscipit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore a in. 
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis explicabo facere est dolores possimus, quis cum quo animi suscipit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore a in. 
                    </div>
                </div>

                <div className="boxes" data-aos="zoom-in">
                    <div className="icon">
                        <i className="fas fa-bookmark"></i>
                    </div>
                    <div className="service-name">
                        Save and favourite recipes
                    </div>
                    <div className="full-des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis explicabo facere est dolores possimus, quis cum quo animi suscipit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore a in. 
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Services