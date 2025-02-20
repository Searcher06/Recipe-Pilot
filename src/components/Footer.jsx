
function Footer() {
  return (
    <>
    <footer>
        <div className="compony">
                <p className="name">Recipe Pilot <i className="fas fa-utensils"></i></p>
                <p id={"company"}>Recipe Pilot – Your ultimate guide to delicious and healthy recipes. Discover, explore, and create mouthwatering dishes with ease. Powered by Spoonacular API, we bring you a world of flavors at your fingertips. Happy Cooking!</p>
                <div className="socials">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-whatsapp"></i>
                </div>
        </div>
            <div className="side">
                <div className="sidelinks">
                    <p><a href="#">Home</a></p>
                    <p><a href="#">Recipes</a></p>
                </div>
                <div className="news-letter">
                    <p>Subscribe</p>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email address"/>
                    <button>Subscribe</button>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer