import { createContext, useState, useMemo } from "react";

export const THEME = {
  light: { background: "#ecf0f1", color: "#282c34" },
  dark: { background: "#282c34", color: "#ecf0f1" },
};

export const ThemeContext = createContext(THEME.dark);

//Provider
const ThemeProvider = ({ children }) => {
  const [on, setOn] = useState(false);
  const update = () => setOn(!on);
  const value = useMemo(() => {
    return {
      on,
      updateTheme: update,
    };
  }, [on, update]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

//Consumer

export default ThemeProvider;
