import React from "react"
import { View, TouchableHighlight, StyleSheet } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import {
  faBars,
  faComment,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"

const HeaderButtons = () => {
  const { doLogout } = useContext(UserContext)

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {}}>
        <FontAwesomeIcon icon={faComment} style={styles.icon} />
      </TouchableHighlight>
      <TouchableHighlight onPress={doLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} style={styles.icon} />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 15,
    color: "white",
  },
})

export default HeaderButtons
