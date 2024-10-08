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
import AvaliablePage from "./pages/AvaliablePage"
import BarbecuePage from "./pages/BarbecuePage"
import ChurrasPage from "./pages/ChurrasPage"
import HomePage from "./pages/HomePage"
import LibraryPage from "./pages/LibraryPage"
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
          <Link to="/profile">
            <div className="relative h-52 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-md"
                style={{
                  backgroundImage: `url('/image-menu.jpg')`,
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
          </Link>

          <IonContent className="">
            <IonList>
              <IonItem button routerLink="/home">
                <img
                  src="/bbq.png"
                  alt="churrasco icon"
                  className="w-9 h-9 mr-4"
                />
                <IonLabel className="mb-1">Inicio</IonLabel>
              </IonItem>
              <IonItem button routerLink="/churrascometro">
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
              <IonItem button routerLink="/avaliable">
                <img
                  src="/star.png"
                  alt="churrasco icon"
                  className="w-9 h-9 mr-4 text-red-700"
                />
                <IonLabel className="mb-1">Favoritos</IonLabel>
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
                  <IonTitle>
                    <Link to="/home">Mestre do churrasco</Link>
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
