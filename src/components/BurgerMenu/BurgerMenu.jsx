import "./BurgerMenu.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import React, { useState } from "react";

function BurgerMenu({ t }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
    document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  };
  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger-wrapper">
      <div
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`mobile-navigation ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={handleMenuClick}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={handleMenuClick}
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={handleMenuClick}
            >
              {t("portfolio")}
            </Link>
          </li>
          <li>
            <Link
              to="team"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={handleMenuClick}
            >
              {t("team")}
            </Link>
          </li>
          <li>
            <Link
              to="strategy"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={handleMenuClick}
            >
              {t("strategy")}
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={handleMenuClick}
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
