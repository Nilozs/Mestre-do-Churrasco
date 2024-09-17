import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import useLoginUsers from "../libs/sign-in"
import { signInSchema } from "../validations/sign-in-validate"

type SignInFormData = z.infer<typeof signInSchema>

export const useSignInForm = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  const { mutate } = useLoginUsers()

  const onSubmit = (data: SignInFormData) => {
    mutate(data)
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    formState,
  }
}
