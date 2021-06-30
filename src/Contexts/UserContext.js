import React, { useState, createContext } from "react"
import {
  setUser as setStoredUser,
  getUser,
  removeUser,
} from "../Hooks/useStorage"
import axios from "axios"
import { useCallback } from "react"

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [signed, setSigned] = useState(false)

  const checkStorage = useCallback(() => {
    getUser().then((user) => {
      if (user) {
        setUser(JSON.parse(user))
        setSigned(true)
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
