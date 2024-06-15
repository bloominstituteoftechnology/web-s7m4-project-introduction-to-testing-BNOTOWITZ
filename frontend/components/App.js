// App.js
import React, { useState } from 'react';
import langData from './path-to-package-lock.json/';

/**
 * Renders the main application component.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.lang='en'] - The initial language. Defaults to 'en' if not provided.
 * @return {JSX.Element} The rendered application component.
 */
const App = ({ lang = 'en' }) => {
  const [language, setLanguage] = useState(lang);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'esp' : 'en'));
  };

  const texts = langData[language];

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
      </button>
      <h1>{texts.header}</h1>
      <input placeholder={texts.searchPlaceholder} />
      <label>{texts.someLabel}</label>
      {/* Continue using `texts` for other parts of your UI */}
    </div>
  );
};

export default App;
