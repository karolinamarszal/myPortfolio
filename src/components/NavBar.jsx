import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import classNames from "../../utils/helpers";
import logo from "../assets/img/logo.png";
import githubLogo from "../assets/img/github-mark.svg";


const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(()=> {
    const onScroll = () => {
      if(window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="hide-img"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={classNames ({
              "active navbar-link": activeLink === "home", 
              "navbar-link": activeLink !== "home",
              "text-scrolled": scrolled,
              "": !scrolled,
            })} 
            onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={classNames ({
              "active navbar-link": activeLink === "skills", 
              "navbar-link": activeLink !== "skills",
              "text-scrolled": scrolled,
              "": !scrolled,
            })}  
            onClick={()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={classNames ({
              "active navbar-link": activeLink === "projects", 
              "navbar-link": activeLink !== "projects",
              "text-scrolled": scrolled,
              "": !scrolled,
            })} 
            onClick={()=> onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/karolinamarszal" target="blank"><img src={githubLogo} /></a>
            </div>
            <a href="#connect">
              <button className={scrolled ? "button-scrolled" : ""} onClick={()=> console.log("connect")}><span>Let's Connect</span></button>
            </a>
          </span>
          </Navbar.Collapse> 
      </Container>
    </Navbar>
  )
}

export default NavBar