import "./Projectlist.css"
import Project from "./Project"
import "../Asset/projet.json"


function Projectlist({projects}) {
    console.log(projects, typeof projects);
    return(
        <div className="projectPage">
            {
        projects.map((project) =>(
            <Project key={project.id} {...project} />
        ))
    }
        </div>

    )
}

export default Projectlist