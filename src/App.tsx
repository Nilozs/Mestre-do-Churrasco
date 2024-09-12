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
  IonToggle,
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
import HomePage from "./pages/HomePage"
import LibraryPage from "./pages/LibraryPage"
import RadioPage from "./pages/RadioPage"
import SearchPage from "./pages/SearchPage"
import "./theme/variables.css"

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
          <Link to="/profile">
            <UserProfileHeader />
          </Link>

          <IonContent className="bg-[#F23005]">
            <IonList>
              <IonItem button routerLink="/home">
                <img
                  src="/churrasco.png"
                  alt="churrasco icon"
                  className="w-9 h-9 mr-4"
                />
                <IonLabel className="mb-1">Churrascometro</IonLabel>
              </IonItem>
              <IonItem button routerLink="/radio">
                <img
                  src="/livro-de-receitas.png"
                  alt="churrasco icon"
                  className="w-9 h-9 mr-4"
                />
                <IonLabel className="mb-1">Receitas</IonLabel>
              </IonItem>
              <IonItem button routerLink="/library">
                <img
                  src="/procurar.png"
                  alt="churrasco icon"
                  className="w-9 h-9 mr-4 text-red-700"
                />
                <IonLabel className="mb-1">Faça sua pesquisa</IonLabel>
              </IonItem>
              <IonItem button routerLink="/search">
                <img
                  src="/carrinho-vazio.png"
                  alt="churrasco icon"
                  className="w-9 h-9 mr-4 text-red-700"
                />
                <IonLabel className="mb-1">Kits de churrasco</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main-content" className="">
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              <IonHeader>
                <IonToolbar>
                  <IonMenuButton slot="start" />
                  <IonTitle>Gril Nota Mil</IonTitle>
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
