import "./Footer.scss";
import { Container, Col, Row } from "react-bootstrap";
import { Instagram, Facebook } from "react-bootstrap-icons";

function Footer({ t }) {
  return (
    <section className="footer" id="footer">
      <Container>
        <Row className="footer__row">
          <Col xs={12} md={10}>
            <p className="footer__text">{t("copyright")}</p>
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
