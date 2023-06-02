import { createContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const value = {
    counter,
    setCounter,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext };
export default AppProvider;
