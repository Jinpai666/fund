import SectionHeader from "../SectionHeader/SectionHeader";
import "./OurNumbers.scss";
import { Container } from "react-bootstrap";

function OurNumbers({ t }) {
  return (
    <section className="numbers" id="portfolio">
      <Container>
        <SectionHeader header={t("ourNumbers")} headline={"headline"} />
        <div className="numbers__row">
          <div className="numbers__col">
            <p className="numbers__top">100 mln $</p>
            <p className="numbers__bottom">{t("seedFunding")}</p>
          </div>
          <div className="numbers__col">
            <p className="numbers__top">15</p>
            <p className="numbers__bottom">{t("pipeline")}</p>
          </div>
          <div className="numbers__col">
            <p className="numbers__top">2 mln $</p>
            <p className="numbers__bottom">{t("tickets")}</p>
          </div>
          <div className="numbers__col">
            <p className="numbers__top">40</p>
            <p className="numbers__bottom">{t("partners")}</p>
          </div>
          <div className="numbers__col">
            <p className="numbers__top">100 mln PLN</p>
            <p className="numbers__bottom">{t("other")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OurNumbers;
