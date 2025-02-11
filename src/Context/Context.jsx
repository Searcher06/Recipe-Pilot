import { createContext, useState } from "react";


// creating the context 
export const ThemeContext = createContext();

// creating the context provider component
export function ContextProvider({children}){
    let [theme,setTheme] = useState("light");

    function toggleTheme(){
        setTheme((prevTheme)=>prevTheme === "light" ? "dark":"light")
    }

    return <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}