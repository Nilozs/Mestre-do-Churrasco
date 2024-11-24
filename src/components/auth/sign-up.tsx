import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IonIcon } from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";
import { useSignUpForm } from "@/hooks/useSingUpForm";

const SignUpForm = () => {
  const { register, handleSubmit, handleCreateUser, errors, isSubmitting } = useSignUpForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleCreateUser)}>
      <Input
        type="text"
        placeholder="Nome Completo"
        {...register("name")}
      />
      {errors.name && <p className="text-blue-600">{errors.name.message}</p>}

      <Input
        type="email"
        placeholder="Endereço de e-mail"
        {...register("email")}
      />
      {errors.email && <p className="text-blue-600">{errors.email.message}</p>}

      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
          {...register("password")}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-3 flex items-center text-gray-600"
        >
          <IonIcon icon={showPassword ? eyeOff : eye} className="h-5 w-5" />
        </button>
      </div>
      {errors.password && <p className="text-blue-600">{errors.password.message}</p>}

      <Input
        type="text"
        placeholder="Celular"
        {...register("phone")}
      />
      {errors.phone && <p className="text-blue-600">{errors.phone.message}</p>}

      <Button
        className="w-full bg-blue-600 text-white"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Cadastrar"}
      </Button>
    </form>
  );
};

export default SignUpForm;

