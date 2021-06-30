import React, { useState, createContext } from "react"
import { setUser as setStoredUser, getUser } from "../Hooks/useStorage"
import axios from "axios"

export const UserContext = createContext({})

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [signed, setSigned] = useState(false)

  getUser().then((user) => {
    if (user) setUser(JSON.parse(user))
  })
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
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
