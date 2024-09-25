import { MaxWidthWrapper } from "@/components/animation"
import Home from "@/components/home/home"
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import ChurrascometroForm from "../components/churascometro/multi-step-form"

const RadioPage = () => (
  <>
    <IonContent className="">
      <MaxWidthWrapper>
        <div>
          <Home />
        </div>
      </MaxWidthWrapper>
    </IonContent>
  </>
)

export default RadioPage
