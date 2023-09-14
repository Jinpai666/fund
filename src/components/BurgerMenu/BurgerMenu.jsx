import "./BurgerMenu.scss";

import React, { useState } from "react";

function BurgerMenu() {
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
              HOME
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#about">
              About Us
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#team">
              Team
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#strategy">
              Strategy
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a onClick={handleMenuClick} href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BurgerMenu;
