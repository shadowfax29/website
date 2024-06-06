import { Col } from "react-bootstrap";
import git from "../assets/img/git.svg";

export const ProjectCard = ({ title, description, imgUrl ,link}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="pr">
      
        <img src={imgUrl} />
       
        <div className="pr">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <div className="social-icon-git">
              <a href={link}><img src={git} alt="Icon" /></a>
              
            </div>
        </div>
      </div>
    </Col>
  )
}
