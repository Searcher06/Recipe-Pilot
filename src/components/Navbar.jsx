import { useContext } from "react";
import { Link,Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/Context";
import HamburgerMenu from "./Menu";
const Navbar = () => {
  const {theme,toggleTheme} = useContext(ThemeContext)
  const rule = theme == "light" ? "black":"white"
  return (
    <>
     <div className="navbar" style={{
      backgroundColor:theme == "light" ? "#eee7e7":"#1b1b1b"
     }}>
          <div className="logo" style={{
            color:theme == "light" ? "black":"white"
          }}>Recipe Pilot  <i className="fas fa-utensils"></i>
          </div>
            <div className="links-cont" >
              <div className="links" >
              <p><Link to="/" style={{color:rule}}>Home</Link></p>
              <p><Link to="/recipes" style={{color:rule}}>Recipes</Link></p>
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
            <HamburgerMenu>
              <Link to={"/"} style={{}}>Home</Link>
              <Link to={"/recipes"} style={{}}>Recipes</Link>
            </HamburgerMenu>
        </div>
        <Outlet />
    </>
  )
}

export default Navbar