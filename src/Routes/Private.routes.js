import React from "react"
import HomeScreen from "../Screens/HomeScreen/index"
import MapScreen from "../Screens/MapScreen/index"
import { createStackNavigator } from "@react-navigation/stack"
import HeaderButtons from "../Components/HeaderButtons/index"

const PrivateStack = createStackNavigator()

const PrivateRoutes = () => {
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen
        name="Home"
        component={HomeScreen}
        options={StackScreenOptions}
      />
      <PrivateStack.Screen
        name="Map"
        component={MapScreen}
        options={StackScreenOptions}
      />
    </PrivateStack.Navigator>
  )
}

const StackScreenOptions = {
  title: "APPQYON",
  headerStyle: {
    backgroundColor: "#196cd4",
  },
  headerRight: HeaderButtons,
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
}

export default PrivateRoutes
