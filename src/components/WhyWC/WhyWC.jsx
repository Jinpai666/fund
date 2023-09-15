import "./WhyWC.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Controller, Film, Lightbulb, Building } from 'react-bootstrap-icons';


function WhyWC({t}) {
  return (
      <Container>
          <div className="whyWC">
              <h3 className="whyWC__header whyWC__header--section">{t("whySectionHeader")}</h3>
              <h2 className="whyWC__header whyWC__header--text">{t("whyTextHeader")}</h2>
              <p className="whyWC__paragraph">
                  {t("whyText")}
              </p>

              <Row className="whyWC__icons">
                  <Col sm={3}>
                      <Controller color="white" size={56} />
                  </Col>
                  <Col sm={3}>
                      <Film color="white"  size={56} />

                  </Col>
                  <Col sm={3}>
                      <Lightbulb color="white"   size={56}/>

                  </Col>
                  <Col sm={3}>
                      <Building color="white"  size={56}/>

                  </Col>

              </Row>
          </div>
      </Container>

  );
}

export default WhyWC;
