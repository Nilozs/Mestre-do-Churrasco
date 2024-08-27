import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import SignInForm from "../components/auth/sign-in";
import SignUpForm from "../components/auth/sign-up";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col items-center justify-center  min-h-screen p-4 bg-[#8C1C03]">
          <div className="flex space-x-4 mb-3 mt-20 shadow-md shadow-[#f2e2051d]">
            <button
              onClick={() => setIsSignIn(true)}
              className={`px-6 py-2 text-white ${
                isSignIn ? "#F2E205" : "bg-red-500"
              } hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded transition-all duration-300`}
            >
              Logar
            </button>
            <button
              onClick={() => setIsSignIn(false)}
              className={`px-6 py-2 text-white ${
                !isSignIn ? "#F2E205" : "bg-red-500"
              } hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded transition-all duration-300`}
            >
              Cadastrar
            </button>
          </div>
          <div
            className={`w-full max-w-md h-full mb-36 p-8 rounded-lg transition-transform duration-500 ease-in-out transform ${
              isSignIn ? "scale-100" : "scale-95"
            }`}
          >
            {isSignIn ? <SignInForm /> : <SignUpForm />}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Auth;
