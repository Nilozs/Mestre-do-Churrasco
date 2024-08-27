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
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { library, playCircle, radio, search } from "ionicons/icons"
import React, { useEffect, useState } from "react"
import { Redirect, Route } from "react-router-dom"
import LoadingScreen from "./components/LoadingScreen"
import Auth from "./pages/Auth"
import HomePage from "./pages/HomePage"
import LibraryPage from "./pages/LibraryPage"
import RadioPage from "./pages/RadioPage"
import SearchPage from "./pages/SearchPage"

/* Core CSS required for Ionic components to work properly */
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

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false)
        localStorage.setItem("loadingCompleted", "true")
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [loading])

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

              <Route path="/auth" render={() => <Auth />} exact={false} />
              <Route path="/home" render={() => <HomePage />} exact={true} />
              <Route path="/radio" render={() => <RadioPage />} exact={true} />
              <Route
                path="/library"
                render={() => <LibraryPage />}
                exact={true}
              />
              <Route
                path="/search"
                render={() => <SearchPage />}
                exact={true}
              />
              <Redirect exact path="/" to="/auth" />
            </>
          )}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
