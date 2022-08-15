import React, {useState, useEffect} from 'react';
const MainContext = React.createContext();

function MainContextProvider(props) {
    const [theme, setTheme] = useState('dark');
    const [language, setLanguage] = useState('EN');

    function switchTheme() {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }

    function switchLanguage() {
        setLanguage(prev => prev === 'EN' ? 'RU' : 'EN');
    }

    return (
        <MainContext.Provider value={{theme, language, switchTheme, switchLanguage}}>
            {props.children}
        </MainContext.Provider>
    )
}

export {MainContextProvider, MainContext}