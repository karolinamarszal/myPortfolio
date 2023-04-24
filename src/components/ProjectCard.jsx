import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={6}>
      <div className="project-container">
        <img src={imgUrl} />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <a href={link} target="blank">
          <span className="link-project"></span>
        </a>
      </div>
    </Col>
  )
}

export default ProjectCard;