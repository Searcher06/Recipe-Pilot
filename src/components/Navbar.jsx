import { useContext } from "react";
import { Link,Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/Context";
const Navbar = () => {
  const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <>
     <div className="navbar">
          <div className="logo">Recipe Pilot  <i className="fas fa-utensils"></i>
          </div>
          <div className="links-cont">
            <div className="links">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/recipes">Recipes</Link></p>
            </div>
            <div className="favourite">
                    <button id="light" onClick={toggleTheme}>
                      <i className={theme === 'light' ? "fa fa-moon":"fa fa-sun"}></i>
                    </button>
                <button>
                    <i className="fas fa-bookmark"></i>
                    Favourite
                </button>
            </div>
          </div>
        </div>
        <Outlet />
    </>
  )
}

export default Navbar