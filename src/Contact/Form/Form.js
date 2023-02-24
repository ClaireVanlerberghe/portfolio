import "./Form.css"

function Form() {
    return(
        <form className="form">
            <input type="text"  placeholder="Votre nom..."  className="form-nom" />
            <input type="text"  placeholder="Votre Prénom..."  className="form-prenom" />
            <input type="email"  placeholder="Votre email..."  className="form-email" />
            <input type="text"  placeholder="Votre message..."  className="form-message" />
            <input type="button" className="form-envoie" value="Envoyer" />
        </form>
    )
}

export default Form