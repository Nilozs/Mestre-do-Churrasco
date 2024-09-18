import React from 'react';
import {
  IonAvatar,
  IonIcon,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { useUser } from "../libs/getUserById";

type Props = {};

const ProfilePage = (props: Props) => {
  const history = useHistory();
  
  const storageUser = JSON.parse(localStorage?.getItem("user") ?? "{}");
console.log('Retrieved user from localStorage:', storageUser);
const userId = Number(storageUser.userId || 0);
console.log('User ID:', userId);


  const { data: user, isLoading, isError } = useUser(userId);

  const goBack = () => {
    history.goBack();
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching user data</p>;
  if (!user) return <p>No user data found</p>;

  return (
    <div className="bg-white min-h-screen w-full max-w-md mx-auto p-4 text-black">
      <header className="flex justify-between items-center mb-6">
        <button className="w-6 h-6" onClick={goBack}>
          <IonIcon icon={arrowBack} />
        </button>
        <h1 className="text-xl font-bold">Perfil</h1>
      </header>

      <div className="relative w-24 h-24 mx-auto mb-6">
        <IonAvatar className="mr-4 mt-16">
          <img
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </IonAvatar>
      </div>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Informações Pessoais</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Nome:</span>
            <span>{user.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Senha:</span>
            <span>********</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Celular:</span>
            <span>{user.phone}</span>
          </div>
        </div>
      </section>

      <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold">
        Editar
      </button>
    </div>
  );
};

export default ProfilePage;
