import { useTranslation } from "react-i18next";
import "./Welcome.scss";
import { Container, Row, Col } from "react-bootstrap";

const locales = {
  en: { title: "EN" },
  pl: { title: "PL" },
};

function Welcome() {
  const { t } = useTranslation();
  return (
          <Container>
              <div className="welcome-section__row-wrapper">
                  <Row className="welcome-section__row">
                      <Col className="welcome-section__column" sm={6}>
                          <div className="welcome-section__text-container">
                              <h2 className="welcome-section__header"> {t("welcome")}</h2>
                              <h3 className="welcome-section__text">{t("seeding")}</h3>
                          </div>
                      </Col>
                      <Col className="welcome-section__column"  sm={6}>
                              <img className="welcome-section__image" src="images/people.webp" alt="people"/>

                      </Col>
                  </Row>
              </div>

          </Container>


  );
}

export default Welcome;
