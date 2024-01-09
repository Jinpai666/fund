import "./WhyWC.scss";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../SectionHeader/SectionHeader";

function WhyWC({ t }) {
  return (
    <section>
      <div className="whyWC">
        <SectionHeader
          header={t("whySectionHeader")}
          headline={t("whyTextHeader")}
        />

        <img
          className="whyWC__decor"
          src="images/network.svg"
          aria-hidden={true}
          alt=""
        />
        <Container>
          <p className="whyWC__paragraph">{t("whyText")}</p>
          <Row className="gap-5 justify-content-center">
            <Col
              xs={12}
              md={4}
              lg={2}
              className="d-flex flex-column align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <path
                  d="M38.5371 56.4629H52.8457M45.6914 49.3086V63.6172M70.7315 60.0401H70.7672M81.4629 52.8858H81.4987M54.4517 35H65.5483C74.938 35 79.6328 35 83.3178 36.7794C86.5624 38.3461 89.2581 40.8561 91.0519 43.9808C93.0894 47.5297 93.4239 52.2126 94.0928 61.5783L94.9729 73.8998C95.4045 79.9413 90.6196 85.0802 84.5627 85.0802C81.4653 85.0802 78.5278 83.7043 76.5449 81.3248L75.2029 79.7144C73.9754 78.2415 73.3616 77.5049 72.6627 76.9097C71.1976 75.6621 69.424 74.8314 67.5276 74.5046C66.623 74.3487 65.6643 74.3487 63.7468 74.3487H56.2532C54.3357 74.3487 53.377 74.3487 52.4724 74.5046C50.576 74.8314 48.8024 75.6621 47.3373 76.9097C46.6384 77.5049 46.0246 78.2414 44.7971 79.7144L43.4551 81.3248C41.4722 83.7043 38.5348 85.0802 35.4373 85.0802C29.3804 85.0802 24.5955 79.9413 25.0271 73.8998L25.9072 61.5783C26.5761 52.2126 26.9106 47.5297 28.9481 43.9808C30.7419 40.8561 33.4376 38.3461 36.6822 36.7794C40.3672 35 45.062 35 54.4517 35Z"
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
              <h2 className="whyWC__header">{t("whyIcon1")}</h2>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={2}
              className="d-flex flex-column align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="57"
                  stroke="#FE0102"
                  strokeWidth="6"
                />
                <path
                  d="M30 50.6667H51.6667M90 50.6667H51.6667M51.6667 50.6667L68.3333 34M68.3333 34H79.3333C82.8225 34 84.6813 34 86.0737 34.593M68.3333 34H40.6667C36.933 34 35.0661 34 33.6401 34.7266C32.3856 35.3658 31.3658 36.3856 30.7266 37.6401C30 39.0661 30 40.933 30 44.6667V76.6667C30 80.4004 30 82.2672 30.7266 83.6933C31.3658 84.9477 32.3856 85.9676 33.6401 86.6067C35.0661 87.3333 36.933 87.3333 40.6667 87.3333H79.3333C83.067 87.3333 84.9339 87.3333 86.3599 86.6067C87.6144 85.9676 88.6342 84.9477 89.2734 83.6933C90 82.2672 90 80.4004 90 76.6667V44.6667C90 40.933 90 39.0661 89.2734 37.6401C88.6342 36.3856 87.6144 35.3658 86.3599 34.7266C86.2665 34.679 86.1713 34.6346 86.0737 34.593M50 34L33.3333 50.6667M70 50.6672L86.0737 34.593M70 69L53.3333 79V59L70 69Z"
                  stroke="#FE0102"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
              <h2 className="whyWC__header">{t("whyIcon2")}</h2>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={2}
              className="d-flex flex-column align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="57"
                  stroke="#FE0102"
                  strokeWidth="6"
                />
                <path
                  d="M71.8889 75.5556V83.3333C71.8889 86.9573 71.8889 88.7693 71.2968 90.1987C70.5074 92.1044 68.9933 93.6186 67.0875 94.408C65.6582 95 63.8462 95 60.2222 95C56.5982 95 54.7862 95 53.3569 94.408C51.4511 93.6186 49.937 92.1044 49.1476 90.1987C48.5556 88.7693 48.5556 86.9573 48.5556 83.3333V75.5556M33 52.2222C33 37.1878 45.1878 25 60.2222 25C75.2566 25 87.4444 37.1878 87.4444 52.2222C87.4444 62.1246 82.1572 70.7921 74.2517 75.5556H46.1927C38.2873 70.7921 33 62.1246 33 52.2222Z"
                  stroke="#FE0102"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="whyWC__header">{t("whyIcon3")}</h2>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={2}
              className="d-flex flex-column align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <path
                  d="M48.6667 40.5556H52.5556M48.6667 52.2222H52.5556M68.1111 52.2222H72M68.1111 63.8889H72M48.6667 63.8889H52.5556M68.1111 40.5556H72M68.1111 95V83.3333C68.1111 79.0378 64.6289 75.5556 60.3333 75.5556C56.0378 75.5556 52.5556 79.0378 52.5556 83.3333V95M83.6667 95V31.2222C83.6667 29.0442 83.6667 27.9552 83.2428 27.1234C82.87 26.3916 82.275 25.7967 81.5433 25.4239C80.7114 25 79.6224 25 77.4444 25H43.2222C41.0442 25 39.9552 25 39.1234 25.4239C38.3916 25.7967 37.7967 26.3916 37.4239 27.1234C37 27.9552 37 29.0442 37 31.2222V95H83.6667Z"
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
              <h2 className="whyWC__header">{t("whyIcon4")}</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default WhyWC;
