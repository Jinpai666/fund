import "./OurNumbers.scss";
import {  Row, Col, Container } from "react-bootstrap";
import { Controller, Film, Lightbulb, Building } from "react-bootstrap-icons";

function OurNumbers({ t }) {
  return (
      <Container>
          <div className="numbers">
              <h2 className="numbers__header ">
                  {t("ourNumbers")}
              </h2>
              <Row className="numbers__columns">
                  <Col className="numbers__container" lg={2}>
                      <div className="numbers__card">
                          <h3 className="numbers__title">{t("seedFunding")}</h3>
                          <p className="numbers__text">100 mln $</p>
                      </div>


                  </Col>
                  <Col className="numbers__container" lg={2}>
                      <div className="numbers__card">
                          <h3 className="numbers__title">{t("pipeline")}</h3>
                          <p className="numbers__text">15</p>
                      </div>


                  </Col>
                  <Col className="numbers__container" lg={2}>
                      <div className="numbers__card">
                          <h3 className="numbers__title">{t("tickets")}</h3>
                          <p className="numbers__text">2 mln $</p>
                      </div>


                  </Col>
                  <Col className="numbers__container" lg={2}>
                      <div className="numbers__card">
                          <h3 className="numbers__title">{t("partners")}</h3>
                          <p className="numbers__text">40</p>
                      </div>


                  </Col>
                  <Col className="numbers__container" lg={2}>
                      <div className="numbers__card">
                          <h3 className="numbers__title">{t("other")}</h3>
                          <p className="numbers__text">100 mln PLN</p>
                      </div>

                  </Col>


              </Row>
          </div>
      </Container>

  );
}

export default OurNumbers;
