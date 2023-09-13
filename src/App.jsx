import {Suspense} from 'react';
import {useTranslation} from 'react-i18next'
import './App.css'

const locales = {
    en: {title: 'English'},
    pl: {title: 'Polski'}
};

function App() {
    const {t, i18n} = useTranslation();
    return (
        <div>
            <ul>
                {Object.keys(locales).map(locale => (
                    <li key={locale}>
                        <button style={{fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal'}} type="submit"
                                onClick={() => i18n.changeLanguage(locale)}>
                            {locales[locale].title}
                        </button>
                    </li>
                ))}
            </ul>
            <h1>{t('header')}</h1>
        </div>

    )
}

export default function WrappedApp() {
    return (
        <Suspense fallback="...">
            <App/>
        </Suspense>
    )
}
