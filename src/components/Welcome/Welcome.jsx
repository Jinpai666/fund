import { useTranslation } from "react-i18next";
import "./Welcome.scss";
import { Container } from "react-bootstrap";

const locales = {
  en: { title: "EN" },
  pl: { title: "PL" },
};

function Welcome() {
  const { t } = useTranslation();
  return (
    <Container className="welcome-section">
      <div className="welcome-section__row-wrapper">
        <div className="welcome-section__text-container">
          <h2 className="welcome-section__header"> {t("welcome")}</h2>
          <h3 className="welcome-section__text">{t("seeding")}</h3>
        </div>
      </div>
    </Container>
  );
}

export default Welcome;
