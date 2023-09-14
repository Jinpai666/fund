import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation.jsx";

const locales = {
  en: { title: "EN" },
  pl: { title: "PL" },
};

function App() {
  const { t, i18n } = useTranslation();
  return (
    <Container className="App">
      <Navigation/>

      <div>
        <h1>{t("header")}</h1>
      </div>
    </Container>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...">
      <App />
    </Suspense>
  );
}
