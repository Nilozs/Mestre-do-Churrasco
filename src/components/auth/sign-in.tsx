import { IonInput, IonInputPasswordToggle } from "@ionic/react"
import { useSignInForm } from "../../hooks/useSignInForm"

const SignIn = () => {
  const { register, handleSubmit, onSubmit, formState } = useSignInForm()
  const { errors, isSubmitting } = formState

  return (
    <form
      className="mx-auto max-w-md space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="font-medium text-2xl">Bem Vindo(a)</h3>

      <div className="space-y-2">
        <label htmlFor="email" className="block font-medium text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          className="w-full rounded border border-gray-300 px-4 py-2 text-white"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-[#F2E205]">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <IonInput
          type="password"
          label="Senha"
          color={"danger"}
          {...register("password")}
          className="px-4 py-2 w-full"
        >
          <IonInputPasswordToggle
            className="text-[#F29F05]"
            color={"success"}
            slot="end"
          ></IonInputPasswordToggle>
        </IonInput>
        {errors.password && (
          <p className="text-[#F2E205]">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded bg-custom-orange px-4 py-2 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Entrar"}
      </button>
    </form>
  )
}

export default SignIn
