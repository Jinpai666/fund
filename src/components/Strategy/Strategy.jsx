import "./Strategy.scss";
import { Container, Row, Col } from "react-bootstrap";

function Strategy({ t }) {
  return (
    <section id="strategy">
      <Container>

        <div className="strategy">
          <h2 className="strategy__header">{t("strategyHeader")}</h2>
          <Row>
            <Col className="strategy__column" xs={12} md={7}>
              <div className="strategy__text-box">
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle1")}</h3>
                  <p className="strategy__text">{t("strategyText1")}</p>
                </div>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle2")}</h3>
                  <p className="strategy__text">{t("strategyText2")}</p>
                </div>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle3")}</h3>
                  <p className="strategy__text">{t("strategyText3")}</p>
                </div>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle4")}</h3>
                  <p className="strategy__text">{t("strategyText4")}</p>
                </div>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle5")}</h3>
                  <p className="strategy__text">{t("strategyText5")}</p>
                </div>
                <div className="strategy__text-group">
                  <h3 className="strategy__title">{t("strategyTitle6")}</h3>
                  <p className="strategy__text">{t("strategyText6")}</p>
                </div>
              </div>

            </Col>
            <Col className="strategy__column" xs={12} md={5}>
              <div className="strategy__image-wrapper">
                <img className="strategy__image" src="/images/strategy.jpg" alt=""/>
              </div>
            </Col>
          </Row>
          <div className="strategy__bottom">
          </div>
        </div>

      </Container>
    </section>
  );
}

export default Strategy;
