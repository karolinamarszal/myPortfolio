import { Container, Row, Col } from "react-bootstrap";
import HookForm from "./HookForm";
import contactImg from "../assets/img/contact-img.png";import Image from 'react-bootstrap/Image';
import TrackVisibility from 'react-on-screen';
import 'animate.css';


const Contact = () => {

  const {
    inputs, 
    handleInputChange,
    handleSubmit,
    disable,
    message,
  } = HookForm()

 
  return (
    <section className="contact" id="connect">
      <Container>
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
            <Row className="align-items-center">
              <Col md={6}>
                <Image src={contactImg} fluid={true} />
              </Col>
              <Col md={6}>
                <h2>Get In Touch</h2>
                <h3 className="mb-5"><a href="mailto:karolina.softwaredeveloper@gmail.com">karolina.softwaredeveloper.com</a> </h3>
                <form onSubmit={handleSubmit} className="form" method="POST" encType="multipart/form-data">
                  <Row>
                    <Col sm={6} className="px-1">
                      <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} value={inputs.firstName || ""} required disabled={disable}/>
                    </Col>
                    <Col sm={6} className="px-1">
                      <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} value={inputs.lastName || ""} required disabled={disable}/>
                    </Col>
                    <Col sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} value={inputs.email || ""} required disabled={disable}/>
                    </Col>
                    <Col sm={6} className="px-1">
                      <input type="tel" name="phone" placeholder="Phone" onChange={handleInputChange} value={inputs.phone || ""} disabled={disable}/>
                    </Col>
                    <Col>
                    <textarea row="6" name="message" placeholder="Message" onChange={handleInputChange} value={inputs.message || ""} required disabled={disable}/>
                    <button type="submit" value="send" disabled={disable}><span>Send</span></button>
                    </Col>
                    {
                      message.text &&
                      <Col>
                        <p className={message.success === false ? "danger" : "success"}>{message.text}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </Col>
            </Row> 
          </div>}
        </TrackVisibility>
      </Container>
    </section>
  );
}

export default Contact;