import { zodResolver } from "@hookform/resolvers/zod"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import InputField from "./InputField"
import NavigationButtons from "./NavigationButtons"

const churrascometroSchema = z.object({
  homens: z.string().min(1, { message: "Número de homens é obrigatório" }),
  mulheres: z.string().min(1, { message: "Número de mulheres é obrigatório" }),
  criancas: z.string().min(1, { message: "Número de crianças é obrigatório" }),
  duracao: z.string().min(1, { message: "Duração é obrigatória" }),
  alimentos: z
    .array(z.string())
    .nonempty({ message: "Selecione ao menos um alimento" }),
  bebidas: z
    .array(z.string())
    .nonempty({ message: "Selecione ao menos uma bebida" }),
  bebidaPreferencial: z
    .string()
    .min(1, { message: "Bebida preferencial é obrigatória" }),
})

type FormData = z.infer<typeof churrascometroSchema>

const ChurrascometroForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(churrascometroSchema),
  })

  const [step, setStep] = useState(0)

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Dados submetidos:", data)
  }

  const steps = [
    <div key="step-1" className="space-y-4">
      <InputField
        id="homens"
        label="Número de Homens"
        placeholder="Digite o número de homens"
        error={errors.homens}
        register={register}
        setValue={() => {}}
        getValues={() => {}}
      />
      <InputField
        id="mulheres"
        label="Número de Mulheres"
        placeholder="Digite o número de mulheres"
        error={errors.mulheres}
        register={register}
        setValue={() => {}}
        getValues={() => {}}
      />
      <InputField
        id="criancas"
        label="Número de Crianças"
        placeholder="Digite o número de crianças"
        error={errors.criancas}
        register={register}
        setValue={() => {}}
        getValues={() => {}}
      />
    </div>,
    <>
      <div key="step-2" className="flex flex-col">
        <label className="block font-medium text-sm md:text-base lg:text-lg">
          Duração do Churrasco
        </label>
        <div className="space-y-2">
          <label className="inline-flex items-center space-x-2">
            <input
              type="radio"
              value="menos-de-3h"
              {...register("duracao")}
              className="hidden peer"
            />
            <span className="px-4 py-2 bg-gray-400 peer-checked:bg-custom-red peer-checked:text-white rounded cursor-pointer w-full text-sm md:text-base">
              Menos de 3 horas
            </span>
          </label>
          <label className="inline-flex items-center space-x-2">
            <input
              type="radio"
              value="3-a-5h"
              {...register("duracao")}
              className="hidden peer"
            />
            <span className="px-4 py-2 bg-gray-400 peer-checked:bg-custom-red peer-checked:text-white rounded cursor-pointer w-full text-sm md:text-base">
              3 a 5 horas
            </span>
          </label>
          <label className="inline-flex items-center space-x-2">
            <input
              type="radio"
              value="mais-de-5h"
              {...register("duracao")}
              className="hidden peer"
            />
            <span className="px-4 py-2 bg-gray-400 peer-checked:bg-custom-red peer-checked:text-white rounded cursor-pointer w-full text-sm md:text-base">
              Mais de 5 horas
            </span>
          </label>
        </div>
        {errors.duracao && (
          <p className="text-red-500 text-sm">{errors.duracao.message}</p>
        )}
      </div>

      <div key="step-3" className="flex flex-col space-y-4">
        <label className="block font-medium text-sm md:text-base lg:text-lg">
          Alimentos
        </label>
        <div className="space-y-2">
          {["bovinos", "peixes", "complementos", "aves", "suinos"].map(
            (item) => (
              <label key={item} className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={item}
                  {...register("alimentos")}
                  className="hidden peer"
                />
                <span className="px-4 py-2 bg-gray-400 peer-checked:bg-custom-red peer-checked:text-white rounded cursor-pointer w-full text-sm md:text-base">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </label>
            ),
          )}
        </div>
        {errors.alimentos && (
          <p className="text-red-500 text-sm">{errors.alimentos.message}</p>
        )}
      </div>

      <div key="step-4" className="flex flex-col space-y-4">
        <label className="block font-medium text-sm md:text-base lg:text-lg">
          Bebidas
        </label>
        <div className="">
          {["refrigerante", "suco", "alcolica"].map((bebida) => (
            <label key={bebida} className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                value={bebida}
                {...register("bebidas")}
                className="hidden peer"
              />
              <span className="px-4 py-2 bg-gray-400 peer-checked:bg-custom-red peer-checked:text-white rounded cursor-pointer w-full text-sm md:text-base">
                {bebida.charAt(0).toUpperCase() + bebida.slice(1)}
              </span>
            </label>
          ))}
        </div>
        {errors.bebidas && (
          <p className="text-red-500 text-sm">{errors.bebidas.message}</p>
        )}

        <label className="block font-medium text-sm md:text-base lg:text-lg">
          Bebida Preferencial
        </label>
        <div className="">
          {["refrigerante", "suco", "alcolica"].map((bebida) => (
            <label key={bebida} className="inline-flex items-center space-x-2">
              <input
                type="radio"
                value={bebida}
                {...register("bebidaPreferencial")}
                className="hidden peer"
              />
              <span className="px-4 py-2 bg-gray-400 peer-checked:bg-custom-red peer-checked:text-white rounded cursor-pointer w-full text-sm md:text-base">
                {bebida.charAt(0).toUpperCase() + bebida.slice(1)}
              </span>
            </label>
          ))}
        </div>
        {errors.bebidaPreferencial && (
          <p className="text-red-500 text-sm">
            {errors.bebidaPreferencial.message}
          </p>
        )}
      </div>
    </>,
  ]

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        {steps[step]}
        <NavigationButtons
          step={step}
          totalSteps={steps.length}
          prevStep={prevStep}
          nextStep={nextStep}
          isSubmitting={isSubmitting}
        />
      </form>
    </div>
  )
}

export default ChurrascometroForm
