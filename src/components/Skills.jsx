import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import ReactLogo from "../assets/img/react-logo.svg";
import JavaScriptLogo from "../assets/img/javascript-logo.svg";
import PythonLogo from "../assets/img/python-logo.svg";
import CssLogo from "../assets/img/css-logo.svg";
import SassLogo from "../assets/img/sass-logo.svg";
import HtmlLogo from "../assets/img/html-logo.svg";
import BootstrapLogo from "../assets/img/bootstrap-logo.svg";
import PostmanLogo from "../assets/img/postman-logo.svg";




const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>
              Skills
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate nobis atque. Culpa odio iusto tempora ducimus ex ut expedita eveniet voluptatem animi nihil quaerat nobis maiores, sit aut. Quae.</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src={ReactLogo} />
                <h4>React</h4>
              </div>
              <div className="item">
                <img src={JavaScriptLogo} />
                <h4>JavaScript</h4>
              </div>
              <div className="item">
                <img src={PythonLogo} />
                <h4>Python</h4>
              </div>
              <div className="item">
                <img src={CssLogo} />
                <h4>CSS</h4>
              </div>
              <div className="item">
                <img src={SassLogo} style={{width: "60%"}}/>
                <h4 style={{marginTop: "38px"}}>Sass</h4>
              </div>
              <div className="item">
                <img src={HtmlLogo} alt="Image" />
                <h4>Html</h4>
              </div>
              <div className="item">
                <img src={BootstrapLogo} style={{width: "45%"}} alt="Image" />
                <h4>Bootstrap</h4>
              </div>
              <div className="item">
                <img src={PostmanLogo} alt="Image" />
                <h4>Postman</h4>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


export default Skills;