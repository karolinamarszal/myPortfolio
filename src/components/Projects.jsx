import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import medMonitorImg from "../assets/img/medMonitorProject-img.jpg";
import infoTradeImg from "../assets/img/infoTrade-img.jpg";
import weatherDetectorImg from "../assets/img/weatherDetector-img.jpg";
import salonSzykImg from "../assets/img/salonSzyk-img.jpg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


const Projects = ()=> {

  const projects = [
    {
      title: "MedMonitor",
      description: "Store information about your medical appointments in one place and search information about drugs.",
      imgUrl: medMonitorImg,
      link: "https://medmonitor.netlify.app/",
    },
    {
      title: "Infotrade",
      description: "Real-time quote and candles data for US stocks.",
      imgUrl: infoTradeImg,
      link: "https://infotrade.netlify.app/",
    },
    {
      title: "Weather-Pollution-Detector",
      description: "See current weather and pollution indicators in cities around the world.",
      imgUrl: weatherDetectorImg, 
      link: "https://github.com/karolinamarszal/Weather-Pollution-Detector",
    },
    {
      title: "'Szyk' Hair Salon",
      description: "Website prepared for one of the hair salons in Poland",
      imgUrl: salonSzykImg,
      link: "https://salonszyk.netlify.app/",
    },
  ]



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <h2>Projects</h2>
              </div>}
            </TrackVisibility>
            <p>Each project has been carefully designed and executed with a specific goal in mind. Whether it's a personal project or a client project, I always approach each one with the same level of dedication and attention to detail. I hope you enjoy exploring my projects and I look forward to the opportunity to work on the new ones!</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index)=> {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"><h3>More projects soon...</h3></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects