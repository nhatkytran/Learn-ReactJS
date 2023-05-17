import './App.css';

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

import Content from './Content';

function App() {
  const { darkTheme, handleDarkTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={handleDarkTheme}>Theme</button>
      <div className={`${darkTheme ? 'dark' : ''}`}>App</div>
      <Content />
    </div>
  );
}

export default App;
