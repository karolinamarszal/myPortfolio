import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import githubLogo from "../assets/img/github-mark.svg";


const Footer = () => {


  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6} className="flex-sm">
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end align-footer">
            <div className="social-icon">
              <a href="https://github.com/karolinamarszal" target="blank">
                <img src={githubLogo} />
              </a>
            </div>
            <p>CopyRight 2023. All Rights Reserved by Karolina Marszał</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;