import { useSignUpForm } from "../../hooks/useSingUpForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUpForm = () => {
  const { register, handleSubmit, handleCreateUser, errors, isSubmitting } = useSignUpForm();

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleCreateUser)}>
      <Input
        type="text"
        placeholder="Nome Completo"
        {...register("name")}
      />
      {errors.name && <p className="text-[#F2E205]">{errors.name.message}</p>}

      <Input
        type="email"
        placeholder="Endereço de e-mail"
        {...register("email")}
      />
      {errors.email && <p className="text-[#F2E205]">{errors.email.message}</p>}

      <Input
        type="password"
        placeholder="Senha"
        {...register("password")}
      />
      {errors.password && <p className="text-[#F2E205]">{errors.password.message}</p>}

      <Button
        className="w-full bg-red-800 text-white"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Cadastrar"}
      </Button>
    </form>
  );
};

export default SignUpForm;
