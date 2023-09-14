import {Suspense} from 'react';
import {useTranslation} from 'react-i18next'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';


const locales = {
    en: {title: 'EN'},
    pl: {title: 'PL'}
};

function App() {
    const {t, i18n} = useTranslation();
    return (
        <Container className="App">
            <nav className="navigation">
                <img className="logo" src="../public/logo.jpg" alt="Working Capital"/>
                <div className="navigation__right-side">
                    <ul className="navigation__links">
                        <li >
                            <a className="navigation__link" href="#">HOME</a>
                        </li>
                        <li >
                            <a className="navigation__link" href="#about">About Us</a>
                        </li>
                        <li >
                            <a className="navigation__link" href="#team">Team</a>
                        </li>
                        <li >
                            <a className="navigation__link" href="#strategy">Strategy</a>
                        </li>
                        <li >
                            <a className="navigation__link" href="#portfolio">Portfolio</a>
                        </li>
                        <li >
                            <a className="navigation__link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                    <ul className="ms-4">
                        {Object.keys(locales).map(locale => (
                            <li key={locale}>
                                <button
                                    className={`navigation__button ${i18n.resolvedLanguage === locale ? 'navigation__button--selected' : ''}`}
                                    onClick={() => i18n.changeLanguage(locale)}>
                                    {locales[locale].title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            </nav>


            <div>

                <h1>{t('header')}</h1>
            </div>


        </Container>


    )
}

export default function WrappedApp() {
    return (
        <Suspense fallback='...'>
            <App/>
        </Suspense>
    )
}
