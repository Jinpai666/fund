import "./About.scss";
import { Container } from "react-bootstrap";

function About({ t }) {
  return (
    <section id="about">
      <Container>
        <div className="about">
          <h2 className="about__header">{t("aboutHeader")}</h2>
          <div className="about__bottom">
            <div className="about__text-box">
              <p className="about__text">{t("aboutText1")}</p>
              <p className="about__text">{t("aboutText2")}</p>
              <p className="about__text">{t("aboutText3")}</p>
              <p className="about__text">{t("aboutText4")}</p>
              <p className="about__text">{t("aboutText5")}</p>
              <p className="about__text">{t("aboutText6")}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
