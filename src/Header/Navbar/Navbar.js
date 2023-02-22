import { NavLink } from "react-router-dom";

import "./Navbar.css"

function Navbar() {
    return(
        <div className="menu">
        <NavLink to="/projet" className="navbar">Projets</NavLink>
        <NavLink to="/about" className="navbar">A propos</NavLink>
        <NavLink to="/contact" className="navbar">Contact</NavLink>
        </div>
    )
}

export default Navbar