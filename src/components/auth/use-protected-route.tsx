import React from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { useAuth } from "../../context/middleware"

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { state } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  )
}

export default ProtectedRoute
