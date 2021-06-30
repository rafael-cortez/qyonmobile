import React from "react"
import { View, TouchableHighlight, StyleSheet } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faBars, faComment } from "@fortawesome/free-solid-svg-icons"

// import { Container } from './styles';

const HeaderButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {}}>
        <FontAwesomeIcon icon={faComment} style={styles.icon} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {}}>
        <FontAwesomeIcon icon={faBars} style={styles.icon} />
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
