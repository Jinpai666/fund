import "./Policy.scss";
import { Container } from "react-bootstrap";

function Policy({ t, handlePolicy }) {

    const closePolicy = () => {
        handlePolicy(false);
    };


  return (
        <div className="policy">
          <Container className="policy__container">
              <div onClick={closePolicy} className="policy__close-button">X</div>
              <div>
                  {t("policy")}
              </div>
          </Container>
        </div>
  );
}

export default Policy;
