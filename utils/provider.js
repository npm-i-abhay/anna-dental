import { useContext, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { global_theme } from "./variables";
import { LightTheme } from "@/comps/theme/Light";
import { DarkTheme } from "@/comps/theme/Dark";
const initialStates = {
  theme: "light",
  setTheme: () => {},
  menuDisplay: "none",
  setMenuDisplay: () => {},
};

const MyContext = createContext(initialStates);

export default function AppProvider({ children }) {
  const [theme, setTheme] = useState(initialStates.theme);
  const [menuDisplay, setMenuDisplay] = useState(initialStates.menuDisplay);

  return (
    <MyContext.Provider
      value={{ theme, setTheme, menuDisplay, setMenuDisplay }}
    >
      <style jsx global>
        {`
          body {
            background-color: ${global_theme[theme].body};
          }
        `}
      </style>
      {/* styled component wrapper is wrapped around the children. Which will be all the components
            this approach allows us to achieve the same result but without having to use comp_theme[theme] etc on every component.

            We can directly refer to the theme in the StyledComponent Object ${({theme})=> theme.variable}
            and it'll automatically refer to the respective theme.
            */}
      <ThemeProvider theme={theme == "light" ? LightTheme : DarkTheme}>
        {children}
      </ThemeProvider>
    </MyContext.Provider>
  );
}

export function useTheme() {
  const { theme, setTheme } = useContext(MyContext);
  return { theme, setTheme };
}
export function useMenu() {
  const { menuDisplay, setMenuDisplay } = useContext(MyContext);
  return { menuDisplay, setMenuDisplay };
}
