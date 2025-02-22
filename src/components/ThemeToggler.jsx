import { ThemeContext } from "../Context/Context"
import { useContext } from "react"
const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button id="li" onClick={toggleTheme}>
        <i className={theme === 'light' ? "fa fa-moon":"fa fa-sun"}></i>
    </button>
  )
}

export default ThemeToggler