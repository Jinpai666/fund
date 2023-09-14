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
      <div  className="welcome-section">
          <Container>
              <Row className="welcome-section__row">
                  <Col className="welcome-section__column" sm={6}>
                      <h2 className="welcome-section__header"> {t("welcome")}</h2>
                      <h3 className="welcome-section__text">{t("seeding")}</h3>
                  </Col>
                  <Col className="welcome-section__column"  sm={6}>
                      <img className="welcome-section__image" src="src/assets/people.webp" alt="people"/>
                  </Col>
              </Row>
          </Container>
      </div>


  );
}

export default Welcome;
