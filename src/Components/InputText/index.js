import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import TextBox from "react-native-password-eye"
import React from "react"
import { View, Text, StyleSheet } from "react-native"

const InputText = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelView}>
        <FontAwesomeIcon icon={props.icon} style={styles.icon} />
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <TextBox
        onChangeText={(text) => props.setValue(text)}
        inputStyle={[
          {
            backgroundColor: "#fff",
            width: "90%",
            height: 40,
            borderRadius: 20,
            paddingHorizontal: 20,
            color: "#333",
          },
        ]}
        containerStyles={[
          {
            backgroundColor: "#fff",
            width: "90%",
            height: 40,
            borderRadius: 20,
            paddingHorizontal: 20,
            color: "#333",
          },
        ]}
        secureTextEntry={props.isPassword}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
    marginRight: 10,
    marginLeft: 20,
    fontSize: 10,
  },
  labelView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
    marginBottom: 3,
  },
  label: {
    fontSize: 15,
    color: "white",
  },
})

export default InputText
