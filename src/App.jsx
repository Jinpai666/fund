import {Suspense, useState} from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import Navigation from "./components/Navigation/Navigation.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import WhyWC from "./components/WhyWC/WhyWC.jsx";
import OurNumbers from "./components/OurNumbers/OurNumbers.jsx";
import About from "./components/About/About.jsx";
import Team from "./components/Team/Team.jsx";
import Strategy from "./components/Strategy/Strategy.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Partners from "./components/Partners/Partners.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CookieInfo from "./components/CookieInfo/CookieInfo.jsx";
import Policy from "./components/Policy/Policy.jsx";

function App() {
  const { t, i18n } = useTranslation();
    const [isPolicyVisible, setIsPolicyVisible] = useState(false);

  return (
    <div className="App">
        {!isPolicyVisible && <Navigation t={t} i18n={i18n} />}
      <Welcome t={t} />
      <WhyWC t={t} />
      <OurNumbers t={t} />
      <About t={t} />
      <Team t={t} />
      <Strategy t={t} />
      <Contact t={t} />
      <Partners t={t} />
      <Footer t={t} />
      <CookieInfo handlePolicy={setIsPolicyVisible} t={t}/>
          {isPolicyVisible &&  <Policy handlePolicy={setIsPolicyVisible} t={t} /> }

    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...">
      <App />
    </Suspense>
  );
}
