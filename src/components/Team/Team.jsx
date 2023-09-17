import "./Team.scss";
import {  Row, Col, Container } from "react-bootstrap";

function Team({ t }) {



  return (
         <section id="team">
             <Container>
                 <div className="team">
                     <h2 className="team__header ">
                         {t("teamHeader")}
                     </h2>

                     <Row className="team__columns">
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person1")}</p>
                                     <p className="team__paragraph">{t("person1text1")}</p>
                                     <p className="team__paragraph">{t("person1text2")}</p>
                                     <p className="team__paragraph">{t("person1text3")}</p>
                                     <p className="team__paragraph">{t("person1text4")}</p>
                                     <p className="team__paragraph">{t("person1text5")}</p>
                                 </div>

                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person1")}</p>
                                     <p className="team__paragraph">{t("person1text1")}</p>
                                     <p className="team__paragraph">{t("person1text2")}</p>
                                     <p className="team__paragraph">{t("person1text3")}</p>
                                     <p className="team__paragraph">{t("person1text4")}</p>
                                     <p className="team__paragraph">{t("person1text5")}</p>
                                 </div>

                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person1")}</p>
                                     <p className="team__paragraph">{t("person1text1")}</p>
                                     <p className="team__paragraph">{t("person1text2")}</p>
                                     <p className="team__paragraph">{t("person1text3")}</p>
                                     <p className="team__paragraph">{t("person1text4")}</p>
                                     <p className="team__paragraph">{t("person1text5")}</p>
                                 </div>

                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person1")}</p>
                                     <p className="team__paragraph">{t("person1text1")}</p>
                                     <p className="team__paragraph">{t("person1text2")}</p>
                                     <p className="team__paragraph">{t("person1text3")}</p>
                                     <p className="team__paragraph">{t("person1text4")}</p>
                                     <p className="team__paragraph">{t("person1text5")}</p>
                                 </div>

                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person1")}</p>
                                     <p className="team__paragraph">{t("person1text1")}</p>
                                     <p className="team__paragraph">{t("person1text2")}</p>
                                     <p className="team__paragraph">{t("person1text3")}</p>
                                     <p className="team__paragraph">{t("person1text4")}</p>
                                     <p className="team__paragraph">{t("person1text5")}</p>
                                 </div>

                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person1")}</p>
                                     <p className="team__paragraph">{t("person1text1")}</p>
                                     <p className="team__paragraph">{t("person1text2")}</p>
                                     <p className="team__paragraph">{t("person1text3")}</p>
                                     <p className="team__paragraph">{t("person1text4")}</p>
                                     <p className="team__paragraph">{t("person1text5")}</p>
                                 </div>

                             </div>

                         </Col>


                     </Row>


                 </div>
             </Container>
        </section>


  );
}

export default Team;
