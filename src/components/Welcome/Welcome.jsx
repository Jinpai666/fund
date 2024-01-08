import "./Welcome.scss";
import { Container } from "react-bootstrap";

function Welcome({ t }) {
  return (
    <section id="home">
      <div className="welcome-section">
        <Container>
          <div className="welcome-section__text-container">
            <div className="welcome-section__text-wrapper">
              <h1
                className="welcome-section__header"
                dangerouslySetInnerHTML={{ __html: t("welcome") }}
              />
              <p className="welcome-section__text">{t("seeding")}</p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Welcome;
