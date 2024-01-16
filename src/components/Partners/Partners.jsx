import "./Partners.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

import { Row, Col, Container } from "react-bootstrap";
function Partners({ t }) {
  return (
    <section id="partners">
      <Container>
        <div className="partners">
          <SectionHeader header={t("partnersHeader")} />

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
