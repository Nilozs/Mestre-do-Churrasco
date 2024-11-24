import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSignInForm } from "../../hooks/useSignInForm"
import { useState } from "react"
import { IonIcon } from "@ionic/react"
import { eye, eyeOff } from "ionicons/icons"

const SignIn = () => {
  const { register, handleSubmit, onSubmit, formState } = useSignInForm()
  const { errors, isSubmitting } = formState
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="Endereço de e-mail"
        {...register("email")}
        className={errors.email ? "border-blue-600" : ""}
      />
      {errors.email && <p className="text-blue-600">{errors.email.message}</p>}
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
          {...register("password")}
          className={errors.email ? "border-blue-600" : ""}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-3 flex items-center text-gray-600"
        >
          <IonIcon icon={showPassword ? eyeOff : eye} className="h-5 w-5" />
        </button>
      </div>
      {errors.password && <p className="text-blue-600 ">{errors.password.message}</p>}

      <Button
        className="w-full bg-blue-600 text-white"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Entrando..." : "Entrar"}
      </Button>
    </form>
  )
}

export default SignIn
