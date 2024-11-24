import {
  IonApp,
  IonContent,
  IonHeader,
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
import "@ionic/react/css/core.css"
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"
import React, { useEffect, useState } from "react"
import { Link, Route } from "react-router-dom"
import LoadingScreen from "./components/LoadingScreen"
import UserProfileHeader from "./components/use-profile-header"
import { useAuth } from "./context/middleware"
import "./index.css"
import Auth from "./pages/Auth"
import AvaliablePage from "./pages/AvaliablePage"
import BarbecuePage from "./pages/BarbecuePage"
import ChurrasPage from "./pages/ChurrasPage"
import HomePage from "./pages/HomePage"
import LibraryPage from "./pages/MapPage"
import MarketDetailPage from "./pages/MarketDetailPage"
import ProfilePage from "./pages/ProfilePage"
import RadioPage from "./pages/RadioPage"
import RecipeDetailPage from "./pages/RecipeDetailPage"

setupIonicReact()

const App: React.FC = () => {
  const { state } = useAuth()
  const [loading, setLoading] = useState(
    () => !localStorage.getItem("loadingCompleted"),
  )
  const router = useIonRouter()

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false)

        if (!state.isAuthenticated) {
          router.push("/auth")
        }
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [loading, state.isAuthenticated, router])

  useEffect(() => {
    if (state.isAuthenticated) {
      localStorage.removeItem("loadingCompleted")
    }
  }, [state.isAuthenticated])

  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId="main-content">
          <div>
            <div className="relative h-52 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center filter"
                style={{
                  backgroundImage: `url('/fundo-bar.jpg')`,
                }}
              ></div>

              <div className="absolute inset-0 bg-black opacity-40"></div>

              <div className="relative z-10 flex items-center p-4">
                {/* <IonAvatar className="mr-4 mt-16">
          <img
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </IonAvatar>
        <IonItem lines="full" className="mt-16">
          {user.name}
        </IonItem> */}
              </div>
            </div>
          </div> 

          <IonContent className="">
            <IonList>
              <IonItem button routerLink="/home">
                <img
                  src="/Gimi.png"
                  className="w-9 h-9 mr-4"
                />
                <IonLabel className="mb-1">Inicio</IonLabel>
              </IonItem>
              <IonItem button routerLink="/churrascometro">
                <img
                  src="ponto-de-interrogacao.png"
                  className="w-9 h-9 mr-4"
                />
                <IonLabel className="mb-1">Conheça o Gemini</IonLabel>
              </IonItem>
              <IonItem button routerLink="/radio">
                <img
                  src="/engrenagem.png"
                  className="w-9 h-9 mr-4"
                />
                <IonLabel className="mb-1">Componentes e Periféricos</IonLabel>
              </IonItem>
              <IonItem button routerLink="/library">
                <img
                  src="/mapa.png"
                  className="w-9 h-9 mr-4 text-blue-600"
                />
                <IonLabel className="mb-1">Procure no mapa</IonLabel>
              </IonItem>
              <IonItem button routerLink="/avaliable">
                <img
                  src="/star.png"
                  className="w-9 h-9 mr-4 text-blue-600"
                />
                <IonLabel className="mb-1">Componentes Favoritos</IonLabel>
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
                  <IonTitle>
                    <Link to="/home">TecNiloz</Link>
                  </IonTitle>
                </IonToolbar>
              </IonHeader>

              <Route path="/auth" component={Auth} />
              <Route path="/home" component={HomePage} />
              <Route path="/churrascometro" component={ChurrasPage} />
              <Route path="/radio" component={RadioPage} />
              <Route path="/library" component={LibraryPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/avaliable" component={AvaliablePage} />
              <Route path="/recipes/:id" component={RecipeDetailPage} />
              <Route path="/market/:id" component={MarketDetailPage} />
              <Route path="/churrascaria/:id" component={BarbecuePage} />
            </>
          )}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
