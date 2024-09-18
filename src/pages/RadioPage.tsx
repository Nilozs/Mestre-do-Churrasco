import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import Recipes from "../components/Recipes"

const RadioPage = () => (
  <>
    <IonHeader></IonHeader>
    <IonContent>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Recipes />
      </div>
    </IonContent>
  </>
)

export default RadioPage
