import SectionHeader from "../SectionHeader/SectionHeader";
import "./About.scss";
import { Container } from "react-bootstrap";

function About({ t }) {
  return (
    <section id="about">
      <Container>
        <SectionHeader
          header={t("aboutHeader")}
          headline={t("aboutHeadline")}
        />

        <div className="about">
          <div className="about__row">
            <div className="about__col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <path
                  d="M46.0556 49.2778L60.5 24L74.9444 49.2778H46.0556Z"
                  stroke="#FE0102"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M53.2778 76.3611C53.2778 83.3414 47.6192 89 40.6389 89C33.6586 89 28 83.3414 28 76.3611C28 69.3808 33.6586 63.7222 40.6389 63.7222C47.6192 63.7222 53.2778 69.3808 53.2778 76.3611Z"
                  stroke="#FE0102"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M67.7222 63.7222H93V89H67.7222V63.7222Z"
                  stroke="#FE0102"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="57"
                  stroke="#FE0102"
                  strokeWidth="6"
                />
              </svg>
              <h2 className="about__header">{t("aboutHeader1")}</h2>
              <p
                className="about__text"
                dangerouslySetInnerHTML={{ __html: t("aboutText1") }}
              />
            </div>
            <div className="about__col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <path
                  d="M95.5 49.5L60.5 32L25.5 49.5L60.5 67L95.5 49.5ZM95.5 49.5V70.5M85 54.75V75.75L60.5 88L36 75.75V54.75"
                  stroke="#FE0102"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="57"
                  stroke="#FE0102"
                  strokeWidth="6"
                />
              </svg>
              <h2 className="about__header">{t("aboutHeader2")}</h2>
              <p
                className="about__text"
                dangerouslySetInnerHTML={{ __html: t("aboutText2") }}
              />
            </div>
            <div className="about__col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <path
                  d="M52.7222 77.8265V87.2207C52.7222 91.5163 56.2045 94.9985 60.5 94.9985C64.7955 94.9985 68.2778 91.5163 68.2778 87.2207L68.2778 77.8265M60.5 25V28.8889M85.2499 35.2501L82.5 38M35.7501 35.2501L38.5 38M29.3889 60H25.5M95.5 60H91.6111M79.9444 60C79.9444 70.7389 71.2389 79.4444 60.5 79.4444C49.7611 79.4444 41.0556 70.7389 41.0556 60C41.0556 49.2611 49.7611 40.5556 60.5 40.5556C71.2389 40.5556 79.9444 49.2611 79.9444 60Z"
                  stroke="#FE0102"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="57"
                  stroke="#FE0102"
                  strokeWidth="6"
                />
              </svg>
              <h2 className="about__header">{t("aboutHeader3")}</h2>
              <p
                className="about__text"
                dangerouslySetInnerHTML={{ __html: t("aboutText3") }}
              />
            </div>
            <div className="about__col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <path
                  d="M44.8333 62.8889C44.8333 71.48 51.7978 78.4444 60.3889 78.4444C64.6844 78.4444 68.5733 76.7033 71.3883 73.8883M44.8333 62.8889H29.2778M44.8333 62.8889C44.8333 56.8534 48.2706 51.6207 53.2944 49.0416M29.2778 62.8889C29.2778 65.0367 27.5367 66.7778 25.3889 66.7778C23.2411 66.7778 21.5 65.0367 21.5 62.8889C21.5 60.7411 23.2411 59 25.3889 59C27.5367 59 29.2778 60.7411 29.2778 62.8889ZM84.8612 38.4165C84.1575 37.7128 83.7222 36.7406 83.7222 35.6667C83.7222 33.5189 85.4633 31.7778 87.6111 31.7778C89.7589 31.7778 91.5 33.5189 91.5 35.6667C91.5 37.8144 89.7589 39.5556 87.6111 39.5556C86.5372 39.5556 85.565 39.1203 84.8612 38.4165ZM84.8612 38.4165L71.3883 51.8894M46.278 31.5006C47.7104 30.9271 48.7222 29.5262 48.7222 27.8889C48.7222 25.7411 46.9811 24 44.8333 24C42.6856 24 40.9444 25.7411 40.9444 27.8889C40.9444 30.0367 42.6856 31.7778 44.8333 31.7778C45.3438 31.7778 45.8314 31.6794 46.278 31.5006ZM46.278 31.5006L53.2944 49.0416M71.3883 73.8883C74.2033 71.0733 75.9444 67.1844 75.9444 62.8889C75.9444 58.5933 74.2033 54.7045 71.3883 51.8894M71.3883 73.8883L84.8612 87.3612M84.8612 87.3612C84.1575 88.065 83.7222 89.0372 83.7222 90.1111C83.7222 92.2589 85.4633 94 87.6111 94C89.7589 94 91.5 92.2589 91.5 90.1111C91.5 87.9633 89.7589 86.2222 87.6111 86.2222C86.5372 86.2222 85.565 86.6575 84.8612 87.3612ZM71.3883 51.8894C68.5733 49.0744 64.6844 47.3333 60.3889 47.3333C57.8333 47.3333 55.4216 47.9496 53.2944 49.0416"
                  stroke="#FE0102"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="57"
                  stroke="#FE0102"
                  strokeWidth="6"
                />
              </svg>
              <h2 className="about__header">{t("aboutHeader4")}</h2>
              <p
                className="about__text"
                dangerouslySetInnerHTML={{ __html: t("aboutText4") }}
              />
            </div>
            <div className="about__col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <path
                  d="M95.5 45.8987H88.5M88.5 45.8987H85C78 38.9049 67.5 31.898 60.5 38.8987M88.5 45.8987V73.8987M60.5 38.8987L49.9984 49.4044C49.7207 49.6822 49.5818 49.8212 49.4701 49.9441C47.0425 52.615 47.0435 56.6937 49.4724 59.3633C49.5842 59.4862 49.7234 59.6253 50.0011 59.9028C50.2788 60.1803 50.4178 60.3192 50.5407 60.4309C53.211 62.8575 57.2883 62.8569 59.9578 60.4295C60.0807 60.3177 60.2196 60.1788 60.4973 59.9012L63.9986 56.3998M60.5 38.8987C53.5 31.898 43 38.9052 36 45.8989H32.5M25.5 45.8989H32.5M32.5 45.8989V73.8987M88.5 73.8987V84.3987H95.5M88.5 73.8987H78.6005M71 63.3987L76.25 68.6487C76.5286 68.9273 76.6682 69.0669 76.7804 69.1903C79.2072 71.8601 79.2072 75.9372 76.7804 78.6071C76.6682 78.7305 76.5286 78.8701 76.25 79.1487C75.9714 79.4273 75.8318 79.5669 75.7084 79.679C73.0385 82.1059 68.9615 82.1059 66.2916 79.679C66.1682 79.5669 66.0286 79.4273 65.75 79.1487L64 77.3987C62.0916 79.307 61.1374 80.2612 60.1081 80.7713C58.1497 81.7418 55.8503 81.7418 53.8919 80.7713C52.8626 80.2612 51.9084 79.307 50 77.3987C47.588 80.6147 42.6347 80.1681 40.8369 76.5724L39.5 73.8987H32.5M32.5 73.8987V84.3987H25.5"
                  stroke="#FE0102"
                  strokeWidth="6"
                  strokeLinecap="square"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="57"
                  stroke="#FE0102"
                  strokeWidth="6"
                />
              </svg>
              <h2 className="about__header">{t("aboutHeader5")}</h2>
              <p
                className="about__text"
                dangerouslySetInnerHTML={{ __html: t("aboutText5") }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
