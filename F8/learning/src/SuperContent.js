import './SuperContent.css';

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function SuperContent() {
  const { darkTheme } = useContext(ThemeContext);

  return <div className={`${darkTheme ? 'dark' : ''}`}>SuperContent</div>;
}

export default SuperContent;
