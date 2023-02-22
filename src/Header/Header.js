import Logoheader from "../images/logo-header.png"
import { NavLink } from "react-router-dom";
import "./Header.css"
import Navbar from "./Navbar/Navbar"

function Header() {
    return(
        <div className="header">
            <NavLink to="/">
         <img src={Logoheader} className="Logoheader" alt="logo du portfolio" />
         </NavLink>
         <Navbar />
        </div>
    )
}

export default Header