import { useState } from "react";
import "../components/Menu.css"
const HamburgerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
      <i className="fas fa-ellipsis-h"></i>
      </button>
      <div className={`menu-list ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default HamburgerMenu;
