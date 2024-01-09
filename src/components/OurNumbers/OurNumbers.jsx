import SectionHeader from "../SectionHeader/SectionHeader";
import "./OurNumbers.scss";

function OurNumbers({ t }) {
  return (
    <section id="portfolio">
      <SectionHeader header={t("ourNumbers")} headline={t("headline")} />
    </section>
  );
}

export default OurNumbers;
