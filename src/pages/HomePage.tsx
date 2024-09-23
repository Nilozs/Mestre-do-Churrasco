import Home from "@/components/home/home"
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import ChurrascometroForm from "../components/churascometro/multi-step-form"

const RadioPage = () => (
  <>
    <IonContent className="">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Home />
      </div>
    </IonContent>
  </>
)

export default RadioPage
