import React from "react"
import { NavigationContainer } from "@react-navigation/native"

import { UserProvider } from "./src/Contexts/UserContext"
import Routes from "./src/Routes/index"
import RNBootSplash from "react-native-bootsplash"

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({ duration: 500 })
  }, [])
  return (
    <UserProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </UserProvider>
  )
}

export default App
