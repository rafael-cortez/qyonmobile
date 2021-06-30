import { ToastAndroid } from "react-native"
export const showToastWithGravity = (message) => {
  ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
}
