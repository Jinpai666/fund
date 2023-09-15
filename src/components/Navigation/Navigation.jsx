import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./Navigation.scss";
import { Container } from "react-bootstrap";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

const locales = {
  en: { title: "EN" },
  pl: { title: "PL" },
};

function Navigation() {
  const { t, i18n } = useTranslation();
  return (
    <Container className="App">
      <nav className="navigation">
        <img
          className="navigation__logo"
          src="logo.svg"
          alt="Working Capital"
        />
        <div className="navigation__right-side">
          <ul className="navigation__links">
            <li>
              <a className="navigation__link" href="#">
                {t("home")}
              </a>
            </li>
            <li>
              <a className="navigation__link" href="#about">
                {t("about")}
              </a>
            </li>
            <li>
              <a className="navigation__link" href="#team">
                {t("team")}
              </a>
            </li>
            <li>
              <a className="navigation__link" href="#strategy">
                {t("strategy")}
              </a>
            </li>
            <li>
              <a className="navigation__link" href="#portfolio">
                {t("portfolio")}
              </a>
            </li>
            <li>
              <a className="navigation__link" href="#contact">
                {t("contact")}
              </a>
            </li>
          </ul>
          <BurgerMenu />

          <ul className="ms-4">
            {Object.keys(locales).map((locale) => (
              <li
                key={locale}
                className={`navigation__button ${
                  i18n.resolvedLanguage === locale
                    ? "navigation__button--selected"
                    : ""
                }`}
                onClick={() => i18n.changeLanguage(locale)}
              >
                {locales[locale].title}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Container>
  );
}

export default Navigation;
