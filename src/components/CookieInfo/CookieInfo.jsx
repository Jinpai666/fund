import React, { useState, useEffect } from "react";
import "./CookieInfo.scss";
import { Container } from "react-bootstrap";

function CookieInfo({ t, handlePolicy }) {
  const [isClosed, setIsClosed] = useState(
    localStorage.getItem("cookieInfoClosed") === "true"
  );

  useEffect(() => {
    localStorage.setItem("cookieInfoClosed", isClosed.toString());
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
  };
  const handleLink = () => {
    handlePolicy(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isClosed) {
    return null;
  }

  return (
    <section className="cookie-info">
      <Container className="cookie-info__text">
        <div>
          {t("cookieInfo")}{" "}
          <span className="cookie-info__link" onClick={handleLink}>
            {t("cookiePolicy")}
          </span>
        </div>
        <div className="cookie-info__button" onClick={handleClose}>
          ✖
        </div>
      </Container>
    </section>
  );
}

export default CookieInfo;
