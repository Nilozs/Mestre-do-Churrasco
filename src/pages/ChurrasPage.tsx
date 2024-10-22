import { MaxWidthWrapper } from "@/components/animation"
import InputsApi from "@/components/churascometro/inputs-api"
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react"

const ChurrasPage = () => (
  <>
    <IonContent className="bg-custom-dark">
      <MaxWidthWrapper>
        <InputsApi />
      </MaxWidthWrapper>
    </IonContent>
  </>
)

export default ChurrasPage
