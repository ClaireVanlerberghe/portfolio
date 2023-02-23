import "./Littleabout.css"
import imageAccueil from "../../images/photo-accueil.png"


function Littleabout() {
    return(
        <div className="accueil-image-about">
        <img src={imageAccueil} className="imageAccueil" alt="dessin avec tete de présentation" />
        <div className="accueil-about">
            <h1 className="accueil-about-title">Claire Vanlerberghe</h1>
            <p className="accueil-about-text">Jeune développeuse web, j’aime créer des sites internet, qui répondent aux besoins des clients.</p>
        </div>
        </div>
    )
}

export default Littleabout