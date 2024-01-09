import "./Contact.scss";
import { Row, Col, Container } from "react-bootstrap";
import { Controller, Film, Lightbulb, Building } from "react-bootstrap-icons";
import SectionHeader from "../SectionHeader/SectionHeader";

function Contact({ t }) {
  return (
    <section className="contact" id="contact">
      <div className="contact__top">
        <Row className="align-items-end">
          <Col className="contact__mobile-col" md={4}></Col>
          <Col md={4}>
            <SectionHeader
              header={t("contactTitle")}
              headline={t("contactHeadline")}
            />
          </Col>
          <Col className="contact__mobile-col" md={4}>
            <img
              className="contact__decoration--right"
              src="images/networkRight.svg"
              aria-hidden={true}
              alt=""
            />
          </Col>
        </Row>
      </div>
      <Container>
        <div className="contact__wrapper">
          <Row>
            <Col md={6}>
              <div className="contact__col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="57"
                    stroke="#FE0102"
                    strokeWidth="6"
                  />
                  <path
                    d="M27 36.0278C27 66.9404 52.0596 92 82.9722 92C84.3669 92 85.7497 91.949 87.1188 91.8487C88.69 91.7337 89.4756 91.6761 90.1907 91.2644C90.783 90.9234 91.3447 90.319 91.6416 89.7034C92 88.9601 92 88.0932 92 86.3594V76.1858C92 74.7278 92 73.9988 91.76 73.3738C91.5481 72.8218 91.2038 72.3302 90.7574 71.9424C90.2521 71.5033 89.567 71.2542 88.1967 70.7559L76.6165 66.5449C75.0223 65.9652 74.2252 65.6753 73.4689 65.7245C72.802 65.7679 72.1603 65.9955 71.6151 66.382C70.9968 66.8202 70.5604 67.5475 69.6876 69.0022L66.7222 73.9444C57.1533 69.6108 49.3957 61.8432 45.0556 52.2778L49.9978 49.3124C51.4525 48.4396 52.1798 48.0032 52.618 47.3849C53.0045 46.8397 53.2321 46.198 53.2755 45.5311C53.3247 44.7749 53.0348 43.9777 52.4551 42.3835L48.2441 30.8033C47.7458 29.433 47.4967 28.7479 47.0576 28.2426C46.6698 27.7962 46.1782 27.4519 45.6262 27.24C45.0012 27 44.2722 27 42.8142 27H32.6406C30.9068 27 30.0399 27 29.2966 27.3584C28.681 27.6553 28.0766 28.217 27.7356 28.8093C27.3239 29.5244 27.2663 30.31 27.1513 31.8812C27.051 33.2503 27 34.6331 27 36.0278Z"
                    stroke="#FE0102"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="contact__header">+48 111 222 333</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="contact__col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="57"
                    stroke="#FE0102"
                    strokeWidth="6"
                  />
                  <path
                    d="M25 44.6667L46.1941 58.7961C51.1837 62.1225 53.6785 63.7856 56.375 64.4318C58.7579 65.0029 61.2421 65.0029 63.625 64.4318C66.3215 63.7856 68.8163 62.1225 73.8059 58.7961L95 44.6667M37.4444 87.4444H82.5556C86.9115 87.4444 89.0895 87.4444 90.7533 86.5967C92.2167 85.851 93.4066 84.6612 94.1523 83.1977C95 81.5339 95 79.356 95 75V45.4444C95 41.0885 95 38.9105 94.1523 37.2467C93.4066 35.7833 92.2167 34.5934 90.7533 33.8477C89.0895 33 86.9115 33 82.5556 33H37.4444C33.0885 33 30.9105 33 29.2467 33.8477C27.7833 34.5934 26.5934 35.7833 25.8477 37.2467C25 38.9105 25 41.0885 25 45.4444V75C25 79.356 25 81.5339 25.8477 83.1977C26.5934 84.6612 27.7833 85.851 29.2467 86.5967C30.9105 87.4444 33.0885 87.4444 37.4444 87.4444Z"
                    stroke="#FE0102"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="contact__header">adress@email.com</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="contact__bottom">
        <Row className="align-items-end">
          <Col className="contact__mobile-col" md={4}>
            <img
              className="contact__decoration--right"
              src="images/networkLeft.svg"
              aria-hidden={true}
              alt=""
            />
          </Col>
          <Col md={4}>
            <p className=" text-center lh-base">
              WORKING CAPITAL
              <br /> ID 21312312
              <br /> Lorem: Ipsum
              <br /> Adres: Licka 66 Waraszawa, 02-022
            </p>
          </Col>
          <Col className="contact__mobile-col" md={4}></Col>
        </Row>
      </div>
    </section>
  );
}

export default Contact;
