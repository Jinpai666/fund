import "./Team.scss";
import { Row, Col, Container } from "react-bootstrap";
import SectionHeader from "../SectionHeader/SectionHeader";

function Team({ t }) {
  return (
    <section className="team" id="team">
      <Container>
        <SectionHeader header={t("teamHeader")} headline={t("teamHeadline")} />

        <Row className="team__columns">
          <Col xs={12} md={6} lg={4}>
            <div className="team__column">
              <div className="team__portrait-wrapper">
                <img
                  className="team__portrait"
                  src="images/person1.jpg"
                  alt="person"
                />
              </div>
              <div className="team__text">
                <p className="team__person">{t("person1")}</p>
                <p
                  className="team__paragraph"
                  dangerouslySetInnerHTML={{ __html: t("person1text") }}
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="team__column">
              <div className="team__portrait-wrapper">
                <img
                  className="team__portrait"
                  src="images/person2.jpg"
                  alt="person"
                />
              </div>
              <div className="team__text">
                <p className="team__person">{t("person2")}</p>

                <p
                  className="team__paragraph"
                  dangerouslySetInnerHTML={{ __html: t("person2text") }}
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="team__column">
              <div className="team__portrait-wrapper">
                <img
                  className="team__portrait"
                  src="images/person3.jpg"
                  alt="person"
                />
              </div>
              <div className="team__text">
                <p className="team__person">{t("person3")}</p>

                <p
                  className="team__paragraph"
                  dangerouslySetInnerHTML={{ __html: t("person3text") }}
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="team__column">
              <div className="team__portrait-wrapper">
                <img
                  className="team__portrait"
                  src="images/person4.jpg"
                  alt="person"
                />
              </div>
              <div className="team__text">
                <p className="team__person">{t("person4")}</p>

                <p
                  className="team__paragraph"
                  dangerouslySetInnerHTML={{ __html: t("person4text") }}
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="team__column">
              <div className="team__portrait-wrapper">
                <img
                  className="team__portrait"
                  src="images/person5.jpg"
                  alt="person"
                />
              </div>
              <div className="team__text">
                <p className="team__person">{t("person5")}</p>
                <p
                  className="team__paragraph"
                  dangerouslySetInnerHTML={{ __html: t("person5text") }}
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="team__column">
              <div className="team__portrait-wrapper">
                <img
                  className="team__portrait"
                  src="images/person5.jpg"
                  alt="person"
                />
              </div>
              <div className="team__text">
                <p className="team__person">{t("person6")}</p>
                <p
                  className="team__paragraph"
                  dangerouslySetInnerHTML={{ __html: t("person6text") }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;
