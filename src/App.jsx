import { Suspense } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import { useTranslation } from "react-i18next";

const locales = {
    en: { title: "EN" },
    pl: { title: "PL" },
};

function App() {
    const { t, i18n } = useTranslation();

    return (
    <div className="App">
      <Navigation t={t} locales={locales} i18n={i18n} />
      <Welcome t={t} locales={locales} />
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
