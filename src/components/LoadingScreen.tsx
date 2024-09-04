import { useIonRouter } from "@ionic/react"
import React, { useEffect } from "react"
import "./LoadingScreen.css"

const LoadingScreen: React.FC = () => {
  const router = useIonRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      const user = localStorage.getItem("user")

      if (user) {
        router.push("/home")
      } else {
        router.push("/auth")
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="loading-container transition">
      <img src="/logo.png" alt="logo-app" />
      <p className="loading-text">Gril Real</p>
    </div>
  )
}

export default LoadingScreen
