import React from "react"
import { NavigationContainer } from "@react-navigation/native"

import { UserProvider } from "./src/Contexts/UserContext"
import Routes from "./src/Routes/index"

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </UserProvider>
  )
}

export default App
