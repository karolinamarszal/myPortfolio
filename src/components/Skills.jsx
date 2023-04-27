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

  const skills = [
    {
      title: "JavaScript",
      img: JavaScriptLogo, 
    },
    {
      title: "React",
      img: ReactLogo,
    },
    {
      title: "Python",
      img: PythonLogo,
    },
    {
      title: "CSS",
      img: CssLogo,
    },
    {
      title: "Sass",
      img: SassLogo,
    },
    {
      title: "Html",
      img: HtmlLogo,
    },
    {
      title: "Bootstrap",
      img: BootstrapLogo,
    },
    {
      title: "Postman",
      img: PostmanLogo,
    },
  ]

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
                {
                  skills.map((skill, index) => {
                    return (
                      <div className="item" key={index}>
                        <div style={{height: "15rem", paddingBottom: "16rem"}}>
                          <img src={skill.img}/>
                        </div>
                        <h4>{skill.title}</h4>
                      </div>
                    )
                  })
                }
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


export default Skills;