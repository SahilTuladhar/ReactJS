import { createContext } from "react";

const ThemeContext = createContext({
    theme : 'light',
    themeHandler : () => {}
})

const ThemeContextProvider = ThemeContext.Provider
const ThemeContextConsumer = ThemeContext.Consumer

export {ThemeContextProvider , ThemeContextConsumer}