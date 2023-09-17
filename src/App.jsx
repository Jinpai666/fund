import { Suspense } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import Navigation from "./components/Navigation/Navigation.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import WhyWC from "./components/WhyWC/WhyWC.jsx";
import OurNumbers from "./components/OurNumbers/OurNumbers.jsx";
import About from "./components/About/About.jsx";
import Team from "./components/Team/Team.jsx";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <Navigation t={t} i18n={i18n} />
      <Welcome t={t} />
      <WhyWC t={t} />
      <OurNumbers t={t} />
        <About t={t}/>
        <Team t={t}/>
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
