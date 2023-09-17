import "./Partners.scss";
import { Row, Col, Container } from "react-bootstrap";
function Partners({ t }) {
  return (
    <section id="partners">
      <Container>
        <div className="partners">
          <h2 className="partners__header">{t("partnersHeader")}</h2>
          <Row className="partners__row">
            <Col className="partners__logo-wrapper" xs={6} md={4} lg={2}>
              <div className="partners__logo" />
            </Col>
            <Col className="partners__logo-wrapper" xs={6} md={4} lg={2}>
              <div className="partners__logo" />
            </Col>
            <Col className="partners__logo-wrapper" xs={6} md={4} lg={2}>
              <div className="partners__logo" />
            </Col>
            <Col className="partners__logo-wrapper" xs={6} md={4} lg={2}>
              <div className="partners__logo" />
            </Col>
            <Col className="partners__logo-wrapper" xs={6} md={4} lg={2}>
              <div className="partners__logo" />
            </Col>
            <Col className="partners__logo-wrapper" xs={6} md={4} lg={2}>
              <div className="partners__logo" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Partners;
