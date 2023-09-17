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
                                 <div className="team__portrait-wrapper">
                                     <img className="team__portrait" src="images/person1.jpg" alt="person"/>
                                 </div>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person1")}</p>
                                     <p className="team__paragraph" dangerouslySetInnerHTML={{ __html: t('person1text') }} />
                                 </div>

                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <div className="team__portrait-wrapper">
                                     <img className="team__portrait" src="images/person2.jpg" alt="person"/>
                                 </div>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person2")}</p>

                                     <p className="team__paragraph" dangerouslySetInnerHTML={{ __html: t('person2text') }} />

                                 </div>

                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <div className="team__portrait-wrapper">
                                     <img className="team__portrait" src="images/person3.jpg" alt="person"/>
                                 </div>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person3")}</p>

                                     <p className="team__paragraph" dangerouslySetInnerHTML={{ __html: t('person3text') }} />

                                 </div>

                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <div className="team__portrait-wrapper">
                                     <img className="team__portrait" src="images/person4.jpg" alt="person"/>
                                 </div>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person4")}</p>

                                     <p className="team__paragraph" dangerouslySetInnerHTML={{ __html: t('person4text') }} />

                                 </div>

                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <div className="team__portrait-wrapper">
                                     <img className="team__portrait" src="images/person5.jpg" alt="person"/>
                                 </div>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person5")}</p>
                                     <p className="team__paragraph" dangerouslySetInnerHTML={{ __html: t('person5text') }} />
                                 </div>

                             </div>

                         </Col>
                         <Col xs={12} md={6} lg={4}>
                             <div className="team__column">
                                 <div className="team__portrait-wrapper">
                                     <img className="team__portrait" src="images/person5.jpg" alt="person"/>
                                 </div>
                                 <div className="team__text">
                                     <p className="team__paragraph">{t("person6")}</p>
                                     <p className="team__paragraph" dangerouslySetInnerHTML={{ __html: t('person6text') }} />


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
