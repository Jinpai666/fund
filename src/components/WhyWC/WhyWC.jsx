import "./WhyWC.scss";
import { Container } from "react-bootstrap";



function WhyWC({t}) {
  return (
      <Container>
          <div className="whyWC">
              <h3 className="whyWC__header whyWC__header--section">{t("whySectionHeader")}</h3>
              <h2 className="whyWC__header whyWC__header--text">{t("whyTextHeader")}</h2>
              <p className="whyWC__paragraph">
                  {t("whyText")}
              </p>
              <div className="whyWC__icons">
                  <i className="whyWC__icon">1</i>
                  <i className="whyWC__icon">1</i>
                  <i className="whyWC__icon">1</i>
                  <i className="whyWC__icon">1</i>
              </div>
          </div>
      </Container>

  );
}

export default WhyWC;
