import "./Footer.css"

import logofooter from "../images/logo-footer.png"

function Footer() {
    return(
        <div className="footer">
        <img className="logofooter" src={logofooter} alt="Logo footer" />
        <p className="textfooter">Claire Vanlerberghe</p>
        </div>
    )
}

export default Footer