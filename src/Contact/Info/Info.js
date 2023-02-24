import "./Info.css"
import fleche from "../../images/flèche.png"

function Info() {
    return(
        <div className="info">
        <p className="infotitle">Pour me contacter, c’est ici</p>
        <img className="fleche" src={fleche} alt="flèche" />
        <p className="infotext">Ou bien ici :</p>
        <div className="info-contact">
            <p className="info-nom">Claire Vanlerberghe</p>
            <p className="info-ville">Toulouse</p>
            <p className="info-numero">06.07.42.78.05</p>
            <p className="info-mail">vanlerberghe24@gmail.com</p>
            <a href="https://github.com/ClaireVanlerberghe" className="info-github">Mon Github</a>
        </div>
        </div>
    )
}

export default Info