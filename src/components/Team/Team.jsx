import "./Team.scss";
import {  Row, Col, Container } from "react-bootstrap";

function Team({ t }) {



  return (
         <section id="portfolio">
             <Container>
                 <div className="team">
                     <h2 className="team__header ">
                         {t("teamHeader")}
                     </h2>

                     <Row className="team__columns">
                         <Col xs={12} md={6} lg={3} xl={2}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                <p className="team__text">{t("person1")}</p>
                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={3} xl={2}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                <p className="team__text">{t("person1")}</p>
                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={3} xl={2}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                <p className="team__text">{t("person1")}</p>
                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={3} xl={2}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                <p className="team__text">{t("person1")}</p>
                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={3} xl={2}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                <p className="team__text">{t("person1")}</p>
                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={3} xl={2}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                <p className="team__text">{t("person1")}</p>
                             </div>

                         </Col>

                     </Row>


                 </div>
             </Container>
        </section>


  );
}

export default Team;
