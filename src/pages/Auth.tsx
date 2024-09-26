import SignIn from "@/components/auth/sign-in"
import SignUpForm from "@/components/auth/sign-up"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IonContent, IonPage } from "@ionic/react"
import { useState } from "react"

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login")

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="w-full max-w-md">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className=" mb-20 space-y-10"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="login"
                  className=""
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="registrar"
                  className=""
                >
                  Registrar
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <SignIn />
              </TabsContent>

              <TabsContent value="registrar">
                <SignUpForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Auth
