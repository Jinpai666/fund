import {useEffect, useRef, useState, useMemo} from 'react';
import "./OurNumbers.scss";
import {  Row, Col, Container } from "react-bootstrap";

function OurNumbers({ t }) {

    const numbers = useRef(null);

    const areNumbersInView = useIsInViewport(numbers);


    function useIsInViewport(ref) {
        const [isIntersecting, setIsIntersecting] = useState(false);

        const observer = useMemo(
            () =>
                new IntersectionObserver(([entry]) =>
                    setIsIntersecting(entry.isIntersecting),
                ),
            [],
        );

        useEffect(() => {
            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            };
        }, [ref, observer]);

        return isIntersecting;
    }

  return (
      <Container>
          <div className="numbers"  ref={numbers}>
              <h2 className="numbers__header ">
                  {t("ourNumbers")}
              </h2>

                  <Row  className={`numbers__columns ${ areNumbersInView ? 'numbers__visible' : 'numbers__hidden' }`}>
                      <Col className="numbers__container" md={6} lg={3} xl={2}>
                          <div className="numbers__card">
                              <h3 className="numbers__title">{t("seedFunding")}</h3>
                              <p className="numbers__text">100 mln $</p>
                          </div>


                      </Col>
                      <Col className="numbers__container" md={6} lg={3} xl={2}>
                          <div className="numbers__card">
                              <h3 className="numbers__title">{t("pipeline")}</h3>
                              <p className="numbers__text">15</p>
                          </div>


                      </Col>
                      <Col className="numbers__container" md={6} lg={3} xl={2}>
                          <div className="numbers__card">
                              <h3 className="numbers__title">{t("tickets")}</h3>
                              <p className="numbers__text">2 mln $</p>
                          </div>


                      </Col>
                      <Col className="numbers__container" md={6} lg={3} xl={2}>
                          <div className="numbers__card">
                              <h3 className="numbers__title">{t("partners")}</h3>
                              <p className="numbers__text">40</p>
                          </div>


                      </Col>
                      <Col className="numbers__container" md={6} lg={3} xl={2}>
                          <div className="numbers__card">
                              <h3 className="numbers__title">{t("other")}</h3>
                              <p className="numbers__text">100 mln PLN</p>
                          </div>

                      </Col>


                  </Row>


          </div>
      </Container>

  );
}

export default OurNumbers;
