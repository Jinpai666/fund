import "./Footer.scss";
import { Container, Col, Row } from "react-bootstrap";
import { Instagram, Facebook } from "react-bootstrap-icons";

function Footer({ t }) {
  return (
    <section id="footer">
      <Container className="footer">
        <Row className="footer__row">
          <Col xs={12} md={10}>
            <p className="footer__text">
              Copyright © Working Capital all rights reserved.
            </p>
          </Col>
          <Col xs={12} md={2}>
            <Row className="footer__icons">
              <Col xs={6} className="footer__icon">
                <a
                  className="footer__link"
                  href="https://facebook.com"
                  target="_blank"
                >
                  <Facebook color="white" size={40} />
                </a>
              </Col>
              <Col xs={6} className="footer__icon">
                <a
                  className="footer__link"
                  href="https://instagram.com"
                  target="_blank"
                >
                  <Instagram color="white" size={40} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
