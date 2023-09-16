import "./OurNumbers.scss";
import {  Row, Col } from "react-bootstrap";
import { Controller, Film, Lightbulb, Building } from "react-bootstrap-icons";

function OurNumbers({ t }) {
  return (
      <div className="numbers">
        <h2 className="numbers__header ">
          {t("ourNumbers")}
        </h2>

        <Row className="numbers__columns">
          <Col>
            <h3>{t("seedFunding")}</h3>
            <p className="whyWC__subtext">100 mln $</p>
          </Col>
          <Col>
            <h3>{t("pipeline")}</h3>
            <p className="whyWC__subtext">15</p>
          </Col>
          <Col>
            <h3>{t("tickets")}</h3>
            <p className="whyWC__subtext">{t("from2mln")}</p>
          </Col>
          <Col>
            <h3>{t("partners")}</h3>
            <p className="whyWC__subtext">40</p>
          </Col>
          <Col>
            <h3>{t("other")}</h3>
            <p className="whyWC__subtext">100 mln PLN</p>
          </Col>

        </Row>
      </div>
  );
}

export default OurNumbers;
