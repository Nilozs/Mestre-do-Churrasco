import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { library, playCircle, radio, search } from "ionicons/icons"
import React, { useEffect, useState } from "react"
import { Redirect, Route } from "react-router-dom"
import LoadingScreen from "./components/LoadingScreen"
import HomePage from "./pages/HomePage"
import LibraryPage from "./pages/LibraryPage"
import RadioPage from "./pages/RadioPage"
import SearchPage from "./pages/SearchPage"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/padding.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css"

/* Theme variables */
import "./index.css"
import Auth from "./pages/Auth"
import "./theme/variables.css"

setupIonicReact()

const App: React.FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        {loading ? (
          <LoadingScreen />
        ) : (
          <IonTabs>
            <IonRouterOutlet>
              <Redirect exact path="/" to="/auth" />
              <Route path="/auth" render={() => <Auth />} exact={true} />
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
            </IonRouterOutlet>

            
            <IonTabBar slot="bottom">
              {window.location.pathname !== "/auth" && (
                <>
                  <IonTabButton tab="home" href="/home">
                    <IonIcon icon={playCircle} />
                    <IonLabel>Listen now</IonLabel>
                  </IonTabButton>

                  <IonTabButton tab="radio" href="/radio">
                    <IonIcon icon={radio} />
                    <IonLabel>Radio</IonLabel>
                  </IonTabButton>

                  <IonTabButton tab="library" href="/library">
                    <IonIcon icon={library} />
                    <IonLabel>Library</IonLabel>
                  </IonTabButton>

                  <IonTabButton tab="search" href="/search">
                    <IonIcon icon={search} />
                    <IonLabel>Search</IonLabel>
                  </IonTabButton>
                </>
              )}
            </IonTabBar>
          </IonTabs>
        )}
      </IonReactRouter>
    </IonApp>
  )
}

export default App
