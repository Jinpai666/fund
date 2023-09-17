import "./About.scss";
import { Container, Row, Col } from "react-bootstrap";

function About({ t }) {
  return (
    <section id="about">
      <Container>
        <h2 className="about__header">{t("aboutHeader")}</h2>

        <div className="about">
          <Row >
            <Col className="about__column" xs={12} md={7}>
              <div className="about__image-wrapper" >
                <img className="about__image" src="/images/invest.jpg" alt="a"/>
              </div>
            </Col>
            <Col className="about__column" xs={12} md={5}>
              <div className="about__text-box">
                <p className="about__text" dangerouslySetInnerHTML={{ __html: t('aboutText1') }}/>
                <p className="about__text" dangerouslySetInnerHTML={{ __html: t('aboutText2') }}/>
                <p className="about__text" dangerouslySetInnerHTML={{ __html: t('aboutText3') }}/>
                <p className="about__text" dangerouslySetInnerHTML={{ __html: t('aboutText4') }}/>
                <p className="about__text" dangerouslySetInnerHTML={{ __html: t('aboutText5') }}/>
                <p className="about__text" dangerouslySetInnerHTML={{ __html: t('aboutText6') }}/>

              </div>
            </Col>
          </Row>

        </div>
      </Container>
    </section>
  );
}

export default About;
