import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {

    const [darkMod, setDarkMod] = useState(false);

    const handleMod = () => {
        setDarkMod(!darkMod);
    };


    return(
        <ThemeContext.Provider value={{ darkMod, handleMod }}>
        {children}
      </ThemeContext.Provider>
    )
};