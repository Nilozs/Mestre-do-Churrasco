import { zodResolver } from "@hookform/resolvers/zod"
import { IonInput, IonInputPasswordToggle } from "@ionic/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import useLoginUsers from "../../libs/sign-in"
import { signInSchema } from "../../validations/sign-in-validate"

type SignInFormData = z.infer<typeof signInSchema>

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const { mutate } = useLoginUsers()

  const onSubmit = (data: SignInFormData) => {
    mutate(data)
  }

  return (
    <form
      className="mx-auto max-w-md space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="font-medium text-2xl">Bem Vindo(a)</h3>

      <div className="space-y-2">
        <label htmlFor="email" className="block font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Digite seu email"
          className="w-full rounded border border-gray-300 px-4 py-2"
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
