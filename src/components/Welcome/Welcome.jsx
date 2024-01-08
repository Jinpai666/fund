import "./Welcome.scss";
import { Container } from "react-bootstrap";

function Welcome({ t }) {
  return (
    <section id="home">
      <Container>
        <div className="welcome-section">
          <div className="welcome-section__text-container">
            <div className="welcome-section__text-wrapper">
              <h1
                className="welcome-section__header"
                dangerouslySetInnerHTML={{ __html: t("welcome") }}
              ></h1>
              <p className="welcome-section__text">{t("seeding")}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Welcome;
