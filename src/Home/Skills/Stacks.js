import "./Stacks.css"
import logohtml from "../../images/logohtml.png"
import logocsssass from "../../images/logocsssass.png"
import logojavascript from "../../images/logojavascript.png"
import logoreact from "../../images/logoreact.png"

function Stacks() {
    return(
        <div className="stacks">
        <h2 className="stacks-title">Mes stacks</h2>
        <div className="stacks-logos">
            <img src={logohtml} alt="logo html" />
            <img src={logocsssass} alt="logo css sass" />
            <img src={logojavascript} alt="logo javascript" />
            <img src={logoreact} alt="logo react" className="logoreact" />
        </div>
        </div>
    )
}
export default Stacks