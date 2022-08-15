import React, { useContext } from 'react';
import { MainContext } from './mainContext';

function LanguageSwitch(props) {
    const context = useContext(MainContext);

    //Mercy for future debug
    console.log('lang', context.language);

    function handleClick() {
        context.switchLanguage();
    }

    const btnStyle = context.language === "RU" ? " lang-ru" : " lang-en";

  return (
    <div className="btn-language-wrapper">
        <button className={`btn-language-picker${btnStyle}`} onClick={handleClick}></button>
    </div>
  )
}

export default LanguageSwitch