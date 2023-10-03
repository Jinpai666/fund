import "./Navigation.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

function Navigation({ t, i18n }) {
  const langChange = (lang) => {
    console.log("lang", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <nav>
      <Container className="navigation">
        <img
          className="navigation__logo"
          src="logo2.svg"
          alt="Working Capital"
        />
        <div className="navigation__right-side">
          <ul className="navigation__links">
            <li>
              <Link
                className="navigation__link"
                to="home"
                smooth={true}
                duration={500}
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                className="navigation__link"
                to="about"
                offset={-100}
                smooth={true}
                duration={500}
              >
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                className="navigation__link"
                to="portfolio"
                offset={-100}
                smooth={true}
                duration={500}
              >
                {t("portfolio")}
              </Link>
            </li>
            <li>
              <Link
                className="navigation__link"
                to="team"
                offset={-100}
                smooth={true}
                duration={500}
              >
                {t("team")}
              </Link>
            </li>
            <li>
              <Link
                className="navigation__link"
                to="strategy"
                offset={-100}
                smooth={true}
                duration={500}
              >
                {t("strategy")}
              </Link>
            </li>
            <li>
              <Link
                className="navigation__link"
                to="contact"
                offset={-100}
                smooth={true}
                duration={500}
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
          <BurgerMenu t={t} />

          <ul className="ms-4 navigation__buttons">
            <div className="navigation__button-wrapper">
              <div
                className={`navigation__button navigation__button--${
                  i18n.resolvedLanguage === "pl" ? "pl" : "en"
                }`}
                onClick={() =>
                  langChange(i18n.resolvedLanguage === "pl" ? "en" : "pl")
                }
              />
            </div>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
