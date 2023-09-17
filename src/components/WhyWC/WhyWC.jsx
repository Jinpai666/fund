import "./WhyWC.scss";
import { Row, Col, Container } from "react-bootstrap";
import { Controller, Film, Lightbulb, Building } from "react-bootstrap-icons";

function WhyWC({ t }) {
  return (
    <section>
      <Container>
        <div className="whyWC">
          <h3 className="whyWC__header--small ">{t("whySectionHeader")}</h3>
          <h2 className="whyWC__header--large">{t("whyTextHeader")}</h2>
          <p className="whyWC__paragraph">{t("whyText")}</p>

          <Row className="whyWC__icons">
            <Col sm={3}>
              <Controller color="white" size={56} />
              <p className="whyWC__subtext">{t("whyIcon1")}</p>
            </Col>
            <Col sm={3}>
              <Film color="white" size={56} />
              <p className="whyWC__subtext">{t("whyIcon2")}</p>
            </Col>
            <Col sm={3}>
              <Lightbulb color="white" size={56} />
              <p className="whyWC__subtext">{t("whyIcon3")}</p>
            </Col>
            <Col sm={3}>
              <Building color="white" size={56} />
              <p className="whyWC__subtext">{t("whyIcon4")}</p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default WhyWC;
