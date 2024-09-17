import { IonInput, IonInputPasswordToggle } from "@ionic/react"
import { useSignUpForm } from "../../hooks/useSingUpForm"

const SignUpForm = () => {
  const { register, handleSubmit, handleCreateUser, errors, isSubmitting } =
    useSignUpForm()

  return (
    <form
      className="mx-auto max-w-md space-y-6"
      onSubmit={handleSubmit(handleCreateUser)}
    >
      <h3 className="font-medium text-2xl">Cadastrar</h3>

      <div className="space-y-2">
        <label htmlFor="name" className="block font-medium text-white">
          Nome
        </label>
        <input
          id="name"
          type="text"
          placeholder="Digite seu Nome"
          className="w-full rounded border border-gray-300 px-4 py-2 text-white"
          {...register("name")}
        />
        {errors.name && <p className="text-[#F2E205]">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="celular" className="block font-medium text-white">
          Celular
        </label>
        <input
          id="celular"
          type="text"
          placeholder="Digite seu celular"
          className="w-full rounded border border-gray-300 px-4 py-2 text-white"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-[#F2E205]">{errors.phone.message}</p>
        )}
      </div>

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
          className="px-4 py-2 w-full "
        >
          <IonInputPasswordToggle color={"success"} slot="end" />
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
        {isSubmitting ? "Enviando..." : "Cadastrar"}
      </button>
    </form>
  )
}

export default SignUpForm
