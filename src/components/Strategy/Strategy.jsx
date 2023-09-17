import "./Strategy.scss";
import { Container, Row, Col } from "react-bootstrap";

function Strategy({ t }) {
  return (
    <section id="strategy">
      <Container>
        <div className="strategy">
          <h2 className="strategy__header">{t("strategyHeader")}</h2>
          <div className="strategy__content">
            <Row className="strategy__row">
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle1")}</h3>
                  <p className="strategy__text">{t("strategyText1")}</p>
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__image-wrapper">
                  <img
                    className="strategy__image"
                    src="/images/invest.webp"
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
                    src="/images/invest.webp"
                    alt="invest"
                  />
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle2")}</h3>
                  <p className="strategy__text">{t("strategyText2")}</p>
                </div>
              </Col>
            </Row>
            <Row className="strategy__row">
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle3")}</h3>
                  <p className="strategy__text">{t("strategyText3")}</p>
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__image-wrapper">
                  <img
                    className="strategy__image"
                    src="/images/invest.webp"
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
                    src="/images/invest.webp"
                    alt="invest"
                  />
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle4")}</h3>
                  <p className="strategy__text">{t("strategyText4")}</p>
                </div>
              </Col>
            </Row>
            <Row className="strategy__row">
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle5")}</h3>
                  <p className="strategy__text">{t("strategyText5")}</p>
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__image-wrapper">
                  <img
                    className="strategy__image"
                    src="/images/invest.webp"
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
                    src="/images/invest.webp"
                    alt="invest"
                  />
                </div>
              </Col>
              <Col className="strategy__column" md={6}>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle6")}</h3>
                  <p className="strategy__text">{t("strategyText6")}</p>
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
