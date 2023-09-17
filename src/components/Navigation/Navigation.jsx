import {Suspense} from "react";
import "./Navigation.scss";
import {Container} from "react-bootstrap";
import {Link, animateScroll as scroll} from "react-scroll";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

const locales = {
    en: {title: "EN"},
    pl: {title: "PL"},
};

function Navigation({t, i18n}) {


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
                    <BurgerMenu t={t} locales={locales} />

                    <ul className="ms-4 navigation__buttons">
                        {Object.keys(locales).map((locale) => (
                            <li key={locale} className="navigation__button-wrapper">
                                <button
                                    className={`navigation__button ${
                                        i18n.resolvedLanguage === locale
                                            ? "navigation__button--selected"
                                            : ""
                                    }`}
                                    onClick={() => i18n.changeLanguage(locale)}
                                >
                                    {locales[locale].title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default Navigation;
