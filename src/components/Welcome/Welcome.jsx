import "./Welcome.scss";
import { Container } from "react-bootstrap";

function Welcome({ t }) {
  return (
    <section className="welcome" id="home">
      <Container>
        <div className="welcome__container">
          <div className="welcome__text-container">
            <div className="welcome__text-wrapper">
              <h1
                className="welcome__header"
                dangerouslySetInnerHTML={{ __html: t("welcome") }}
              />
              <p className="welcome__text">{t("seeding")}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Welcome;
