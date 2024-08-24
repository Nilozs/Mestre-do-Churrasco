import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./LoadingScreen.css"

const LoadingScreen: React.FC = () => {
  const history = useHistory()

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/home")
    }, 2000)

    return () => clearTimeout(timer)
  }, [history])

  return (
    <div className="loading-container transition">
      <img src="/logo.png" alt="logo-app" />
      <p className="loading-text">Gril Real</p>
    </div>
  )
}

export default LoadingScreen
