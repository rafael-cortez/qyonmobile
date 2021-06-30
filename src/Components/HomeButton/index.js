import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const HomeButton = ({ action, title, icon }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={action}>
        <FontAwesomeIcon icon={icon} style={styles.icon} />
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    color: "#196cd4",
    padding: 25,
  },
})

export default HomeButton
