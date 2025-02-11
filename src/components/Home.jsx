import { useContext } from "react";
import Footer from "./Footer"
import { MainContent } from "./MainContent"
import Navbar from "./Navbar";
import { ThemeContext } from "../Context/Context";

const Home = () => {
  let {theme} = useContext(ThemeContext) 
      
  return (
    <>
    <div style={{
      background:theme === "light" ? "white":"#1e1e1e",
      width:"100%"
    }}>
        <Navbar />
        <MainContent />
        <Footer />
    </div>
    </>
  )
}

export default Home