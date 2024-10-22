import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const InputsApi = () => {
  return (
    <div className="p-4 max-w-[100vw] space-y-6">
      <h1 className="text-2xl font-bold mb-6">Churrascometro com IA</h1>

      <div className="space-y-2">
        <Label htmlFor="user-input" className="text-sm font-medium">
          Digite algo:
        </Label>
        <Input
          id="user-input"
          placeholder="Digite aqui..."
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="display-area" className="text-sm font-medium">
          Texto digitado:
        </Label>
        <Textarea
          id="display-area"
          placeholder="O texto digitado aparecerá aqui..."
          readOnly
          className="w-full h-32"
        />
      </div>
    </div>
  )
}

export default InputsApi
