import {
  faBuilding,
  faCalculator,
  faMapMarked,
} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { useContext } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native"
import HomeButton from "../../Components/HomeButton/index"
import { UserContext } from "../../Contexts/UserContext"

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = React.useState(false)
  const { user } = useContext(UserContext)

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Wait please...</Text>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How can we help you?</Text>
      <View style={styles.buttonContainer}>
        <HomeButton title="Item 1" icon={faBuilding} action={() => {}} />
        <HomeButton title="Item 2" icon={faCalculator} action={() => {}} />
        <HomeButton title="Item 3" icon={faBuilding} action={() => {}} />
        <HomeButton title="Item 4" icon={faCalculator} action={() => {}} />
        <HomeButton title="Item 5" icon={faBuilding} action={() => {}} />
        <HomeButton
          title="Map"
          icon={faMapMarked}
          action={() => {
            navigation.push("Map")
          }}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginQuestion}>Already a member?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06b1ff",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    height: 150,
    textAlignVertical: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    flexDirection: "row",
    height: 60,
  },
  loginQuestion: {
    color: "white",
  },
  loginBtn: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
})

export default HomeScreen
