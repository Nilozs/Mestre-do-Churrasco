import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
  useIonRouter,
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { library, playCircle, radio, search } from "ionicons/icons"
import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import LoadingScreen from "./components/LoadingScreen"
import Auth from "./pages/Auth"
import HomePage from "./pages/HomePage"
import LibraryPage from "./pages/LibraryPage"
import RadioPage from "./pages/RadioPage"
import SearchPage from "./pages/SearchPage"

import "@ionic/react/css/core.css"
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/palettes/dark.system.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"
import "./index.css"
import "./theme/variables.css"

setupIonicReact()

const App: React.FC = () => {
  const [loading, setLoading] = useState(
    () => !localStorage.getItem("loadingCompleted"),
  )
  const router = useIonRouter()

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false)
        localStorage.setItem("loadingCompleted", "true")
        router.push("/auth") // Redirecionar após o splash screen
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [loading, router])

  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem button routerLink="/home">
                <IonIcon slot="start" icon={playCircle} />
                <IonLabel>Listen Now</IonLabel>
              </IonItem>
              <IonItem button routerLink="/radio">
                <IonIcon slot="start" icon={radio} />
                <IonLabel>Radio</IonLabel>
              </IonItem>
              <IonItem button routerLink="/library">
                <IonIcon slot="start" icon={library} />
                <IonLabel>Library</IonLabel>
              </IonItem>
              <IonItem button routerLink="/search">
                <IonIcon slot="start" icon={search} />
                <IonLabel>Search</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main-content">
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              <IonHeader>
                <IonToolbar>
                  <IonMenuButton slot="start" />
                  <IonTitle>App Title</IonTitle>
                </IonToolbar>
              </IonHeader>

              <Route path="/auth" component={Auth} />
              <Route path="/home" component={HomePage} />
              <Route path="/radio" component={RadioPage} />
              <Route path="/library" component={LibraryPage} />
              <Route path="/search" component={SearchPage} />
            </>
          )}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
