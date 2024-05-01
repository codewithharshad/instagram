import { useState } from 'react'
import { useTranslation } from 'react-i18next';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
      <h1>{t('greeting')}{t('greeting')}</h1> 
      <p>{t('intro')}</p>
    </div>
  );
}

export default App
