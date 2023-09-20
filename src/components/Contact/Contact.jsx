import "./Contact.scss";
import { Row, Col, Container } from "react-bootstrap";
import { Controller, Film, Lightbulb, Building } from "react-bootstrap-icons";

function Contact({ t }) {
  return (
    <section id="contact">
      <Container>

        <div className="contact">
            <h2 className="contact__header">{t("contactTitle")}</h2>

            <Row className="contact__row">
            <Col className="contact__column" md={6}>
              <div className="contact__text">
                  <p>WORKING CAPITAL</p>
                  <p>ID 21312312</p>
                  <p>Lorem: Ipsum</p>
                  <p>Adres: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error incidunt repellendus sequi sint. </p>
              </div>
            </Col>
            <Col className="contact__column" md={6}>
                <div className="contact__text">
                    <p>WORKING CAPITAL</p>
                    <p>ID 21312312</p>
                    <p>Lorem: Ipsum</p>
                    <p>Adres: Licka 66 Waraszawa, 02-022</p>
                </div>
            </Col>

          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
