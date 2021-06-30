import React, { useContext } from "react"
import { getUser } from "../Hooks/useStorage"

import { UserContext } from "../Contexts/UserContext"
import PublicRoutes from "./Public.routes"
import PrivateRoutes from "./Private.routes"

const Routes = () => {
  const { signed } = useContext(UserContext)
  return signed ? <PrivateRoutes /> : <PublicRoutes />
}

export default Routes
