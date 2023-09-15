import { Suspense } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./components/Navigation/Navigation.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome />
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
