import { NavLink } from "react-router-dom";

import "./Navbar.css"

function Navbar() {
    return(
        <div className="menu">
        <NavLink to="/project" className="navbar">Projets</NavLink>
        <NavLink to="/about" id="aboutNavbar" className="navbar">A propos</NavLink>
       
        </div>
    )
}

export default Navbar