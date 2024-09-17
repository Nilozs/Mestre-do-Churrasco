import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import ChurrascometroForm from "../components/churascometro/multi-step-form"

const ChurrasPage = () => (
  <>
    <IonContent className="bg-custom-dark">
      <div>
        <ChurrascometroForm />
      </div>
    </IonContent>
  </>
)

export default ChurrasPage
