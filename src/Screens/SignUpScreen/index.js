import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import axios from "axios"
import useLocation from "../../Hooks/geolocation"
import { showToastWithGravity } from "../../Components/Toast/index"
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native"

import InputText from "../../Components/InputText/index"

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const { coords, errorMsg } = useLocation()
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    if (coords) {
      setLoading(false)
    }
  }, [coords])
  const signup = async () => {
    if (!username || !password || !confirmPassword) {
      showToastWithGravity("All fields must be filled")
      return
    }
    if (password !== confirmPassword) {
      showToastWithGravity("passwords does not matches")
      return
    }
    const body = {
      username,
      password,
      latitude: String(coords.latitude),
      longitude: String(coords.longitude),
    }
    try {
      await axios.post(
        `https://qyonapp-backend.herokuapp.com/create-user`,
        body
      )
      showToastWithGravity("User created successfully")
      navigation.pop()
    } catch (error) {
      showToastWithGravity(error.message)
    }
  }

  if (loading) {
    return (
      <ImageBackground
        source={require("../../Assets/Images/bg.png")}
        style={styles.image}
      >
        <Text style={styles.subtitle}>Getting your current location</Text>
        <Text style={styles.subtitle}>Wait please...</Text>
        <ActivityIndicator size="large" color="#fff" />
      </ImageBackground>
    )
  }

  return (
    <ImageBackground
      source={require("../../Assets/Images/bg.png")}
      style={styles.image}
    >
      <Text style={styles.title}>APPQYON</Text>
      <Text style={styles.subtitle}>Sign Up</Text>
      <InputText icon={faUser} setValue={setUsername} label="Username" />
      <InputText
        icon={faLock}
        setValue={setPassword}
        label="Password"
        isPassword={true}
      />
      <InputText
        icon={faLock}
        setValue={setConfirmPassword}
        label="Confirm Password"
        isPassword={true}
      />
      <TouchableHighlight onPress={signup}>
        <Text style={styles.signUpBtn}>Sign Up</Text>
      </TouchableHighlight>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 40,
  },
  whiteText: {
    color: "white",
  },
  whiteTextBold: {
    color: "white",
    fontWeight: "bold",
  },
  signUpBtn: {
    backgroundColor: "#2196F3",
    color: "white",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  keepSignedContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-between",
  },
  createNewAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-between",
  },
})

export default SignUpScreen
