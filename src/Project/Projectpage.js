import Projectlist from "./Projectlist";
import projects from "../Asset/projet.json";



function Projectpage() {

return (
    <div className="projectPage">
  
    
    <Projectlist  projects={projects} />
  
    </div>
  );
}
export default Projectpage