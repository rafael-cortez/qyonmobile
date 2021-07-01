import React, { useState, createContext } from "react"
import {
  setUser as setStoredUser,
  getUser,
  removeUser,
} from "../Hooks/useStorage"
import axios from "axios"
import { useCallback } from "react"
import TouchID from "react-native-touch-id"
import { useEffect } from "react"

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [signed, setSigned] = useState(false)

  const checkStorage = useCallback(async () => {
    const config = {
      title: "Biometric Auth",
      sensorErrorDescription: "Invalid Biometric Auth",
    }
    getUser().then((user) => {
      if (user) {
        TouchID.authenticate("Fingerprint Auth", config)
          .then((success) => {
            setUser(JSON.parse(user))
            setSigned(true)
          })
          .catch((error) => {
            console.log("Invalid Authentication")
          })
      }
    })
  }, [])

  const doLogout = () => {
    removeUser()
    setUser(null)
    setSigned(false)
  }

  const doLogin = async (username, password, keepSigned) => {
    try {
      const response = await axios.post(
        "https://qyonapp-backend.herokuapp.com/login",
        {
          username,
          password,
        }
      )
      setUser(response.data)
      if (keepSigned) {
        setStoredUser(response.data)
      }
      setSigned(true)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  return (
    <UserContext.Provider
      value={{
        signed,
        user,
        setUser,
        doLogin,
        checkStorage,
        doLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
