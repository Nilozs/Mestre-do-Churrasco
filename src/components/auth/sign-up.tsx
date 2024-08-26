import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonLabel,
} from "@ionic/react"

const SignUpForm = () => {
  return (
    <form className="mx-auto max-w-md space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block font-medium">
          Nome
        </label>
        <input
          id="name"
          type="text"
          placeholder="Digite seu Nome"
          className="w-full rounded border border-gray-300 px-4 py-2"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="celular" className="block font-medium">
          Celular
        </label>
        <input
          id="celular"
          type="email"
          placeholder="Digite seu email"
          className="w-full rounded border border-gray-300 px-4 py-2"
        />
      </div>
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
        <IonInput className="" type="password" label="Senha" color={"danger"} value="****">
          <IonInputPasswordToggle className="text-[#F29F05]" color={"success"} slot="end"></IonInputPasswordToggle>
        </IonInput>
      </div>
      <button
        type="submit"
        className="w-full rounded bg-[#F29F05] px-4 py-2 text-white"
      >
        Cadastrar
      </button>
    </form>
  )
}

export default SignUpForm
