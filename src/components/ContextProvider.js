import { createContext } from "react";


const UserContext = createContext("Guest") ; // Setting default value to guest if the component is not contained within the provider

const UserContextProvider = UserContext.Provider

const UserContextConsumer = UserContext.Consumer

export { UserContextProvider, UserContextConsumer } ;