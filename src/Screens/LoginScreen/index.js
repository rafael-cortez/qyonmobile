import React, { useEffect, useContext } from "react"
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import { showToastWithGravity } from "../../Components/Toast/index"
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native"

import InputText from "../../Components/InputText/index"
import { UserContext } from "../../Contexts/UserContext"

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [keepSigned, setKeepSigned] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const { doLogin, checkStorage } = useContext(UserContext)

  useEffect(() => {
    checkStorage()
    setLoading(false)
  }, [checkStorage])

  const login = async () => {
    setLoading(true)
    if (!username || !password) {
      showToastWithGravity("Username and Password must be filled")
      return
    }
    try {
      await doLogin(username, password, keepSigned)
    } catch (error) {
      if (
        error.response ||
        error.response.status ||
        error.response.status === 401
      ) {
        showToastWithGravity(`Senha inválida`)
        return
      }
      showToastWithGravity(`Usuário inválido`)
      return
    } finally {
      setLoading(false)
    }
  }

  const signup = () => {
    navigation.push("SignUp")
  }

  if (loading) {
    return (
      <ImageBackground
        source={require("../../Assets/Images/bg.png")}
        style={styles.image}
      >
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
      <Text style={styles.subtitle}>Login</Text>
      <InputText icon={faUser} setValue={setUsername} label="Username" />
      <InputText
        icon={faLock}
        setValue={setPassword}
        label="Password"
        isPassword={true}
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.whiteText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={login}>
        <Text style={styles.loginBtn}>LOGIN</Text>
      </TouchableHighlight>
      <View style={styles.keepSignedContainer}>
        <Text style={styles.whiteText}>Keep me Signed In</Text>
        <Switch
          trackColor={{ false: "#767577", true: "white" }}
          thumbColor={keepSigned ? "#2196F3" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setKeepSigned(!keepSigned)}
          value={keepSigned}
        />
      </View>
      <View style={styles.createNewAccountContainer}>
        <Text style={styles.whiteText}>Are you a new user?</Text>
        <TouchableOpacity onPress={signup}>
          <Text style={styles.whiteTextBold}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
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
  loginBtn: {
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

export default LoginScreen
