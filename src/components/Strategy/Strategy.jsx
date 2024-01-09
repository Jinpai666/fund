import "./Strategy.scss";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../SectionHeader/SectionHeader";

function Strategy({ t }) {
  return (
    <section id="strategy">
      <Container>
        <div className="strategy">
          <SectionHeader header={t("strategyHeader")} headline={"headline"} />
          <div className="strategy__content">
            <Row className="strategy__row">
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group">
                  <div className="strategy__text-wrapper">
                    <h3 className="strategy__title">{t("strategyTitle1")}</h3>
                    <p className="strategy__text">{t("strategyText1")}</p>
                  </div>
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__image-wrapper">
                  <img
                    className="strategy__image"
                    src="/images/strat1.webp"
                    alt="invest"
                  />
                </div>
              </Col>
            </Row>
            <Row className="strategy__row">
              <Col className="strategy__column" md={6}>
                <div className="strategy__image-wrapper">
                  <img
                    className="strategy__image"
                    src="/images/strat2.webp"
                    alt="invest"
                  />
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group strategy__text-group--alt">
                  <div className="strategy__text-wrapper">
                    <h3 className="strategy__title">{t("strategyTitle2")}</h3>
                    <p className="strategy__text">{t("strategyText2")}</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="strategy__row">
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group">
                  <div className="strategy__text-wrapper">
                    <h3 className="strategy__title">{t("strategyTitle3")}</h3>
                    <p className="strategy__text">{t("strategyText3")}</p>
                  </div>
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__image-wrapper">
                  <img
                    className="strategy__image"
                    src="/images/strat3.webp"
                    alt="invest"
                  />
                </div>
              </Col>
            </Row>
            <Row className="strategy__row">
              <Col className="strategy__column" md={6}>
                <div className="strategy__image-wrapper">
                  <img
                    className="strategy__image"
                    src="/images/strat4.webp"
                    alt="invest"
                  />
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group strategy__text-group--alt">
                  <div className="strategy__text-wrapper">
                    <h3 className="strategy__title">{t("strategyTitle4")}</h3>
                    <p className="strategy__text">{t("strategyText4")}</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="strategy__row">
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group">
                  <div className="strategy__text-wrapper">
                    <h3 className="strategy__title">{t("strategyTitle5")}</h3>
                    <p className="strategy__text">{t("strategyText5")}</p>
                  </div>
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__image-wrapper">
                  <img
                    className="strategy__image"
                    src="/images/strat5.webp"
                    alt="invest"
                  />
                </div>
              </Col>
            </Row>
            <Row className="strategy__row">
              <Col className="strategy__column" md={6}>
                <div className="strategy__image-wrapper">
                  <img
                    className="strategy__image"
                    src="/images/strat6.webp"
                    alt="invest"
                  />
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group strategy__text-group--alt">
                  <div className="strategy__text-wrapper">
                    <h3 className="strategy__title">{t("strategyTitle6")}</h3>
                    <p className="strategy__text">{t("strategyText6")}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Strategy;
