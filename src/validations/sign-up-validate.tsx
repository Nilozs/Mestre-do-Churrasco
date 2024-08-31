// src/validationSchema.ts
import { z } from "zod"

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres." })
    .max(50, { message: "O nome deve ter no máximo 50 caracteres." }),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, { message: "O celular deve ter 10 ou 11 dígitos." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
})
