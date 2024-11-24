import { MaxWidthWrapper } from "@/components/animation"
import GeminiInReact from "@/components/churascometro/GeminiBot"

import { IonContent } from "@ionic/react"

const ChurrasPage = () => (
  <>
    <IonContent className="bg-custom-dark">
      <MaxWidthWrapper>
        <GeminiInReact />
      </MaxWidthWrapper>
    </IonContent>
  </>
)

export default ChurrasPage
