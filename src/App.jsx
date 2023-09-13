import {Suspense} from 'react';
import {useTranslation} from 'react-i18next'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


const locales = {
    en: {title: 'EN'},
    pl: {title: 'PL'}
};

function App() {
    const {t, i18n} = useTranslation();
    return (
        <>
            <Navbar collapseOnSelect expand='md' fixed='top'>
                <Container className="d-flex justify-content-between">
                    <Navbar.Brand  href="#"><img className="logo" src="../public/logo.jpg" alt="Working Capital"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse className="justify-content-end" id='responsive-navbar-nav'>
                            <Nav>
                                <Nav.Link className="navlink" href='/#'>HOME</Nav.Link>
                                <Nav.Link href='#about'>About Us</Nav.Link>
                                <Nav.Link href='#team'>Team</Nav.Link>
                                <Nav.Link href='#strategy'>Strategy</Nav.Link>
                                <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
                                <Nav.Link href='#contact'>Contact Us</Nav.Link>
                            </Nav>

                    </Navbar.Collapse>
                    <ul className="ms-4" >
                        {Object.keys(locales).map(locale => (
                            <li key={locale}>
                                <button className="language-button" style={{width:'50px', fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal'}} type='submit'
                                        onClick={() => i18n.changeLanguage(locale)}>
                                    {locales[locale].title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Navbar>

                <div>

                    <h1>{t('header')}</h1>
                </div>


        </>


    )
}

export default function WrappedApp() {
    return (
        <Suspense fallback='...'>
            <App/>
        </Suspense>
    )
}
