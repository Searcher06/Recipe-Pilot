import { Link, Route,Routes } from "react-router-dom";
import { Recipes } from "./components/Recipes";
import Home from "./components/Home";
import { ContextProvider } from "./Context/Context";
import { BreakfastProvider } from "./Context/BreakfastContext";
import { DinnerProvider } from "./Context/DinnerContext";
import { LunchProvider } from "./Context/LunchContext";
import { QuickProvider } from "./Context/QuickRecipeContext";
import { TopRecipeProvider } from "./Context/TopRecipeContext";
import { RecipeInfoCard } from "./components/RecipeInfoCard";
import Navbar from "./components/Navbar";
import { ResultProvider } from "./Context/Scroll";
import { useEffect } from "react";
import Aos from "aos";
function App() {
    useEffect(()=>{
      Aos.init({
        duration:1000,
        once:true,
      })
    })
    return (
      <>
      <ResultProvider>
        <ContextProvider>
          <BreakfastProvider>
            <DinnerProvider>
              <LunchProvider>
                <QuickProvider>
                  <TopRecipeProvider>
                      <Routes>
                          <Route element={<Navbar />}>
                                <Route path="/" element={<Home />}></Route>
                                <Route path="/recipes" element={<Recipes />}></Route>
                                <Route path="/recipeinfo/:id" element={<RecipeInfoCard />}></Route>
                                <Route path="*" element={<h1 style={{marginTop:"90px"}}>Where you dey go 😏
                                  go back to <Link to={"/"}>Home</Link>
                                </h1>}></Route>
                          </Route>
                      </Routes>
                  </TopRecipeProvider>
                </QuickProvider>
              </LunchProvider>
            </DinnerProvider>
          </BreakfastProvider>
        </ContextProvider>  
      </ResultProvider>    
      </>
    )
  }
  
  export default App
  
  // cf1326b2aabc4e33b90cd9882679e059