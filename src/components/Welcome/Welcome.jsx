import "./Welcome.scss";



function Welcome({t}) {
  return (
    <div className="welcome-section">
        <div className="welcome-section__text-container">
          <h2 className="welcome-section__header"> {t("welcome")}</h2>
          <h3 className="welcome-section__text">{t("seeding")}</h3>
        </div>
    </div>
  );
}

export default Welcome;
