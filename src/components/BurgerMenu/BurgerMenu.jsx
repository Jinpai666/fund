import "./BurgerMenu.scss";
import { useTranslation } from "react-i18next";

import React, { useState } from "react";



function BurgerMenu({t, locales}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      <nav className={`mobile-navigation ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a onClick={handleMenuClick} href="#home">
              {t("home")}
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#about">
              {t("about")}
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#team">
              {t("team")}
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#strategy">
              {t("strategy")}
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#portfolio">
              {t("portfolio")}
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#contact">
              {t("contact")}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BurgerMenu;
