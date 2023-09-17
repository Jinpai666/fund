import { useEffect, useRef, useState, useMemo } from "react";
import "./OurNumbers.scss";
import { Row, Col, Container } from "react-bootstrap";

function OurNumbers({ t }) {
  const numbers = useRef(null);

  const areNumbersInView = useIsInViewport(numbers);

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
          new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
              setIsIntersecting(true);
              observer.disconnect();
            }
          }),
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
    <section id="portfolio">
      <Container>
        <div className="numbers" ref={numbers}>
          <h2 className="numbers__header ">{t("ourNumbers")}</h2>

          <Row className="numbers__columns">
            <Col className="numbers__container" md={6} lg={3} xl={2}>
              <div
                className={`numbers__card ${
                  areNumbersInView ? "numbers__visible" : "numbers__hidden"
                }`}
              >
                <h3
                  className={`numbers__title ${
                    areNumbersInView ? "numbers__visible" : "numbers__hidden"
                  }`}
                >
                  {t("seedFunding")}
                </h3>
                <p
                  className={`numbers__text ${
                    areNumbersInView ? "numbers__visible" : "numbers__hidden"
                  }`}
                >
                  100 mln $
                </p>
              </div>
            </Col>
            <Col className="numbers__container" md={6} lg={3} xl={2}>
              <div
                className={`numbers__card ${
                  areNumbersInView ? "numbers__visible" : "numbers__hidden"
                }`}
              >
                <h3
                  className={`numbers__title ${
                    areNumbersInView ? "numbers__visible" : "numbers__hidden"
                  }`}
                >
                  {t("pipeline")}
                </h3>
                <p
                  className={`numbers__text ${
                    areNumbersInView ? "numbers__visible" : "numbers__hidden"
                  }`}
                >
                  15
                </p>
              </div>
            </Col>
            <Col className="numbers__container" md={6} lg={3} xl={2}>
              <div
                className={`numbers__card ${
                  areNumbersInView ? "numbers__visible" : "numbers__hidden"
                }`}
              >
                <h3
                  className={`numbers__title ${
                    areNumbersInView ? "numbers__visible" : "numbers__hidden"
                  }`}
                >
                  {t("tickets")}
                </h3>
                <p
                  className={`numbers__text ${
                    areNumbersInView ? "numbers__visible" : "numbers__hidden"
                  }`}
                >
                  2 mln $
                </p>
              </div>
            </Col>
            <Col className="numbers__container" md={6} lg={3} xl={2}>
              <div
                className={`numbers__card ${
                  areNumbersInView ? "numbers__visible" : "numbers__hidden"
                }`}
              >
                <h3
                  className={`numbers__title ${
                    areNumbersInView ? "numbers__visible" : "numbers__hidden"
                  }`}
                >
                  {t("partners")}
                </h3>
                <p
                  className={`numbers__text ${
                    areNumbersInView ? "numbers__visible" : "numbers__hidden"
                  }`}
                >
                  40
                </p>
              </div>
            </Col>
            <Col className="numbers__container" md={6} lg={3} xl={2}>
              <div
                className={`numbers__card ${
                  areNumbersInView ? "numbers__visible" : "numbers__hidden"
                }`}
              >
                <h3
                  className={`numbers__title ${
                    areNumbersInView ? "numbers__visible" : "numbers__hidden"
                  }`}
                >
                  {t("other")}
                </h3>
                <p
                  className={`numbers__text ${
                    areNumbersInView ? "numbers__visible" : "numbers__hidden"
                  }`}
                >
                  100 mln PLN
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default OurNumbers;
