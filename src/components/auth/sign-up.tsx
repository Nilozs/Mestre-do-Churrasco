import { zodResolver } from "@hookform/resolvers/zod"
import {
  IonInput,
  IonInputPasswordToggle,
  IonToast,
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
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  })

  const { mutate, isSuccess } = useCreateUser()
  const [present, dismiss] = useIonToast()
  const router = useIonRouter() // Use useIonRouter instead of useNavigate

  async function handleCreateUser(data: SignUpFormData) {
    try {
      await mutate(data)
      if (isSuccess) {
        router.push("/home") // Redirect using router.push
        present({
          message: "Usuário criado com sucesso",
          duration: 2000,
          color: "success",
        })
      }
      console.log(data)
    } catch (error) {
      present({
        message: "Erro ao criar usuário",
        duration: 2000,
        color: "danger",
      })
    }
  }

  return (
    <form
      className="mx-auto max-w-md space-y-6"
      onSubmit={handleSubmit(handleCreateUser)}
    >
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
          <IonInputPasswordToggle
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
        className="w-full rounded bg-[#F29F05] px-4 py-2 text-white"
      >
        Cadastrar
      </button>
      <IonToast
        trigger="open-toast"
        message="usuario enviado com sucesso"
        duration={5000}
      ></IonToast>
    </form>
  )
}

export default SignUpForm
