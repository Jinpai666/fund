import "./Contact.scss";
import { Row, Col, Container } from "react-bootstrap";
import { Controller, Film, Lightbulb, Building } from "react-bootstrap-icons";

function Contact({ t }) {
  return (
    <section id="contact">
      <Container>
        <div className="contact">
          <Row className="contact__row">
            <Col md={4}>
              <div>dane</div>
            </Col>
            <Col md={4}>
              <div>dane</div>
            </Col>
            <Col md={4}>
              <div className="contact__image-wrapper">
                <img
                  className="contact__image-wrapper"
                  src="/images/contact.jpg"
                  alt="contact"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
