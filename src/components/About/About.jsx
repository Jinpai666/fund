import "./About.scss";
import { Container } from "react-bootstrap";

function About({ t }) {
  return (
    <section id="about">
      <Container>
        <div className="about">
          <h2 className="about__header">ABOUT US</h2>
          <div className="about__bottom">
            <div className="about__text-box">
              <p className="about__text">Diverse Expertise for Comprehensive Investment</p>
              <p className="about__text">
                Multifaceted Team: Dynamic and varied backgrounds in finance,
                start-ups, gaming, film, and media. A collective wealth of
                experience spanning diverse industries.
              </p>
              <p className="about__text">
                Deep Experience: Our team boasts proven track records of
                success, ensuring well-informed and strategic investment
                decisions.
              </p>
              <p className="about__text">
                Visionary Approach: A history of spotting emerging trends and
                capitalizing on pioneering opportunities, setting us ahead of
                the curve.
              </p>
              <p className="about__text">
                Strong Networks: Robust industry connections provide exclusive
                access to prime investment opportunities and reinforce our
                market position.
              </p>
              <p className="about__text">
                Collaborative Core: Our team thrives on synergy. By leveraging
                individual strengths, we ensure cohesive and sound investment
                choices.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
