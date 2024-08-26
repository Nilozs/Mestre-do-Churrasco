import { IonContent, IonInput, IonInputPasswordToggle } from "@ionic/react"
import React from "react"

const SignIn = () => {
  return (
    <form className="mx-auto max-w-md space-y-6">
      <h3 className="font-medium text-3xl">Bem Vindo(a)</h3>
      <div className="space-y-2">
        <label htmlFor="email" className="block font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          className="w-full rounded border border-gray-300 px-4 py-2"
        />
      </div>
      <div className="space-y-2">
        <IonInput
          className=""
          type="password"
          label="Senha"
          color={"danger"}
          value="****"
        >
          <IonInputPasswordToggle
            className="text-[#F29F05]"
            color={"success"}
            slot="end"
          ></IonInputPasswordToggle>
        </IonInput>
      </div>
      <button
        type="submit"
        className="w-full rounded bg-[#F29F05] px-4 py-2 text-white"
      >
       Login
      </button>
    </form>
  )
}

export default SignIn
