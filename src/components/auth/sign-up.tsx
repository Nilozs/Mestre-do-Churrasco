import { zodResolver } from "@hookform/resolvers/zod"
import {
  IonInput,
  IonInputPasswordToggle,
  useIonRouter,
  useIonToast,
} from "@ionic/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import useCreateUser from "../../libs/sign-up"
import { signUpSchema } from "../../validations/sign-up-validate"

type SignUpFormData = z.infer<typeof signUpSchema>

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  })

  const router = useIonRouter()
  const [present] = useIonToast()
  const { mutate } = useCreateUser()

  const handleCreateUser = (data: SignUpFormData) => {
    mutate(data, {
      onSuccess: () => {
        present({
          message: "Usuário criado com sucesso",
          duration: 2000,
          color: "success",
        })
        router.push("/home")
      },
      onError: () => {
        present({
          message: "Erro ao criar usuário",
          duration: 2000,
          color: "danger",
        })
      },
    })
  }

  return (
    <form
      className="mx-auto max-w-md space-y-6"
      onSubmit={handleSubmit(handleCreateUser)}
    >
      <h3 className="font-medium text-2xl">Cadastrar</h3>

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
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-[#F2E205]">{errors.phone.message}</p>
        )}
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
