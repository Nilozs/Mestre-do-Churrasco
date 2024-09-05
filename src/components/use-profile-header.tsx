import { IonAvatar, IonItem, IonLabel } from "@ionic/react"
import React from "react"
import { useAuth } from "../context/middleware"

const UserProfileHeader: React.FC = () => {
  const { state } = useAuth()

  return (
    <div className="relative h-52 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md"
        style={{
          backgroundImage: `url('/image-menu.jpg')`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex items-center p-4">
        <IonAvatar className="mr-4 mt-16 ">
          <img
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </IonAvatar>
        <IonItem lines="full" className="mt-16">
          Chip Avatar
        </IonItem>
      </div>
    </div>
  )
}

export default UserProfileHeader
