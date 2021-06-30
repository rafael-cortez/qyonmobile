import AsyncStorage from "@react-native-community/async-storage"

const prefix = "@userdata"
const getUser = async () => {
  return await AsyncStorage.getItem(prefix)
}
const setUser = async (user) => {
  await AsyncStorage.setItem(prefix, JSON.stringify(user))
}
const removeUser = async () => {
  await AsyncStorage.removeItem(prefix)
}
export { getUser, setUser, removeUser }
