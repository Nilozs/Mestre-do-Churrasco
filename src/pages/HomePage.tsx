import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import React from "react"

const HomePage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Listen now</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        Listen now content
      </div>
    </IonContent>
  </>
)

export default HomePage
