import { zodResolver } from "@hookform/resolvers/zod"
import { useIonRouter, useIonToast } from "@ionic/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import useCreateUser from "../libs/sign-up"
import { signUpSchema } from "../validations/sign-up-validate"

type SignUpFormData = z.infer<typeof signUpSchema>

export const useSignUpForm = () => {
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

  return {
    register,
    handleSubmit,
    handleCreateUser,
    errors,
    isSubmitting,
  }
}
