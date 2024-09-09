import { IonIcon, useIonRouter } from "@ionic/react"
import { logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons"
import React, { useEffect, useState } from "react"
import { useAuth } from "../context/middleware"
import LoadScrenSvg from "./LoadScrenSvg"
import "./LoadingScreen.css"

const LoadingScreen: React.FC = () => {
  const router = useIonRouter()
  const { state } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!state.loading) {
        if (state.isAuthenticated) {
          router.push("/home")
        } else {
          router.push("/auth")
        }
        setIsLoading(false) 
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [state, router])

  useEffect(() => {
    if (!state.loading && !isLoading) {
      if (state.isAuthenticated) {
        router.push("/home")
      } else {
        router.push("/auth")
      }
    }
  }, [state, isLoading, router])

  return (

    
    <div className="fire">
      <div className="loading-container">
        <div className="logo-section">
          <img src="/logo2.png" alt="logo-app" width={60} height={60} />
          <h2 className="loading-text font-sans mb-10 text-4xl">Grill Real</h2>
        </div>
        <LoadScrenSvg />
        <div className="social-icons">
          <IonIcon icon={logoFacebook} />
          <IonIcon icon={logoInstagram} />
          <IonIcon icon={logoTwitter} />
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
