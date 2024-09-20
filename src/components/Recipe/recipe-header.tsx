import { IonIcon } from "@ionic/react"
import { arrowBack } from "ionicons/icons"
import { useHistory } from "react-router-dom"

const Header = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <header className="flex justify-center h-96 w-screen items-center p-6">
      <button onClick={goBack} className="flex items-center">
        <IonIcon icon={arrowBack} className="w-6 h-6 mr-2" />
      </button>
      <h1 className="text-xl font-bold">Voltar</h1>
    </header>
  )
}

export default Header
