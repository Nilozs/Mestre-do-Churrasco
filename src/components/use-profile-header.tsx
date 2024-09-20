import { IonAvatar, IonItem } from "@ionic/react"
import React from "react"
import { useUser } from "../libs/getUserById"

const UserProfileHeader: React.FC = () => {
  const storageUser = JSON.parse(localStorage?.getItem("user") ?? "{}")
  const id_user = Number(storageUser.userId || 0)

  const { data: user, isLoading, isError } = useUser(id_user)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error fetching user data</p>
  if (!user) return <p>No user data found</p>

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
        <IonAvatar className="mr-4 mt-16">
          <img
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </IonAvatar>
        <IonItem lines="full" className="mt-16">
          {user.name}
        </IonItem>
      </div>
    </div>
  )
}

export default UserProfileHeader
