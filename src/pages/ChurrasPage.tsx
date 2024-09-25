import { MaxWidthWrapper } from "@/components/animation"
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import ChurrascometroForm from "../components/churascometro/multi-step-form"

const ChurrasPage = () => (
  <>
    <IonContent className="bg-custom-dark">
      <MaxWidthWrapper>
        <div>
          <ChurrascometroForm />
        </div>
      </MaxWidthWrapper>
    </IonContent>
  </>
)

export default ChurrasPage
