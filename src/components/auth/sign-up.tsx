import { IonInput, IonInputPasswordToggle } from "@ionic/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "../../validations/sign-up-validate"
import { z } from "zod"

type SignUpFormData = z.infer<typeof signUpSchema>

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = (data: SignUpFormData) => {
    console.log(data)
  }

  return (
    <form className="mx-auto max-w-md space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <label htmlFor="name" className="block font-medium">
          Nome
        </label>
        <input
          id="name"
          type="text"
          placeholder="Digite seu Nome"
          className="w-full rounded border border-gray-300 px-4 py-2"
          {...register("name")}
        />
        {errors.name && <p className="text-[#F2E205]">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="celular" className="block font-medium">
          Celular
        </label>
        <input
          id="celular"
          type="text"
          placeholder="Digite seu celular"
          className="w-full rounded border border-gray-300 px-4 py-2"
          {...register("celular")}
        />
        {errors.celular && <p className="text-[#F2E205]">{errors.celular.message}</p>}
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
          {...register("email")}
        />
        {errors.email && <p className="text-[#F2E205]">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <IonInput
          type="password"
          label="Senha"
          color={"danger"}
          {...register("password")}
          className="px-4 py-2 w-full"
        >
          <IonInputPasswordToggle color={"success"} slot="end"></IonInputPasswordToggle>
        </IonInput>
        {errors.password && <p className="text-[#F2E205]">{errors.password.message}</p>}
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
