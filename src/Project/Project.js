import "./Project.css";


function Project({ url, image, title, description, stacks }) {
    return(
    
        <div className="projectContainer">
        <a href={url} className="project">
                <img className="projectImage" src={image} alt="kasa"></img>
                <div className="projectTexte">
                <h1 className="projectTitle">{title}</h1>
                <p className="projectDescription">{description}</p>
                <p className="projectStacks">{stacks}</p>
                </div>
        </a>
        </div>
   
    )
}
export default Project