import { useState } from "react";
import { ThemeContext } from "./src/context/ThemeContext";
import RootStack from "./src/navigators/RootStack";
import { Appearance } from "react-native";

export default function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode, system: false };
    } else {
      if (newTheme.system) {
        const systemColorScheme = Appearance.getColorScheme();
        mode = systemColorScheme === "dark" ? "light" : "dark";

        newTheme = { ...newTheme, mode };
      } else {
        newTheme = { ...newTheme, system: false };
      }
    }
    setTheme(newTheme);
  };

  // monitor system for theme change

  if (theme.system) {
    Appearance.addChangeListener((colorScheme) => {
      updateTheme({ system: true, mode: colorScheme });
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <RootStack />
    </ThemeContext.Provider>
  );
}
