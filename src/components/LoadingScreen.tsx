import { IonIcon, useIonRouter } from "@ionic/react"
import { logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons"
import React, { useEffect } from "react"
import { useAuth } from "../context/middleware"
import "./LoadingScreen.css"

const LoadingScreen: React.FC = () => {
  const router = useIonRouter()
  const { state } = useAuth()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state.loading) return

      if (state.isAuthenticated) {
        router.push("/home")
      } else {
        router.push("/auth")
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [state, router])

  return (
    <div className="loading-container">
      <img src="/image-loadscreen.jpg" alt="logo-app" />
      <div className="logo-section">
        <img src="/logo2.png" alt="logo-app" width={60} height={60} />
        <h2 className="loading-text font-sans mb-10 text-4xl">Grill Real</h2>
      </div>
    </div>
  )
}

export default LoadingScreen
