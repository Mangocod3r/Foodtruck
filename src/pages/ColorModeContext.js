import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  colorMode: "light",
  setColorMode: () => {},
});

export const ColorModeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("light");

  const value = {
    colorMode,
    setColorMode,
  };

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};
