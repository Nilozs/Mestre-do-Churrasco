import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSignInForm } from "../../hooks/useSignInForm"

const SignIn = () => {
  const { register, handleSubmit, onSubmit, formState } = useSignInForm()
  const { errors, isSubmitting } = formState

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="Endereço de e-mail"
        {...register("email")}
        className={errors.email ? "border-red-500" : ""}
      />
      {errors.email && <p className="text-custom-orange">{errors.email.message}</p>}

      <Input
        type="password"
        placeholder="Senha"
        {...register("password")}
        className={errors.password ? "border-red-500 text-custom-dark" : ""}
      />
      {errors.password && (
        <p  className="text-custom-orange">{errors.password.message}</p>
      )}

      <div className="text-right">
        <a href="#" className="text-orange-500 text-sm">
          Esqueceu a senha?
        </a>
      </div>

      <Button
        className="w-full bg-red-800 text-white"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Entrando..." : "Entrar"}
      </Button>
    </form>
  )
}

export default SignIn
