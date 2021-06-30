import React from "react"
import LoginScreen from "../Screens/LoginScreen/index"
import SignUpScreen from "../Screens/SignUpScreen/index"
import { createStackNavigator } from "@react-navigation/stack"

const PublicStack = createStackNavigator()

const PublicRoutes = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <PublicStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={StackScreenOptions}
      />
    </PublicStack.Navigator>
  )
}

const StackScreenOptions = {
  title: "APPQYON",
  headerStyle: {
    backgroundColor: "#196cd4",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
}

export default PublicRoutes
