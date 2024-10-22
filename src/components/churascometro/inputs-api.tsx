import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { useState } from "react"

const InputsApi = () => {
  const [userInput, setUserInput] = useState("")
  const [answer, setAnswer] = useState("")

  const client = axios.create({
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CHATGPT_KEY}`,
    },
  })

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const params = {
      model: "text-davinci-003",
      prompt: `Calcule o churrascometro baseado no seguinte input: ${userInput}`,
      max_tokens: 100,
      temperature: 0.7,
    }

    client
      .post("https://api.openai.com/v1/chat/completions", params)
      .then((result) => setAnswer(result.data.choices[0].text.trim()))
      .catch((err) => console.error(err))
  }

  return (
    <div className="p-4 max-w-[100vw] space-y-6">
      <h1 className="text-2xl font-bold mb-6">Churrascometro com IA</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="user-input" className="text-sm font-medium">
            Digite os detalhes do churrasco:
          </Label>
          <Input
            id="user-input"
            placeholder="Ex: 10 pessoas, 5 homens, 5 mulheres, 4 crianças..."
            className="w-full"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-red-700 text-white rounded-md"
        >
          Calcular Churrasco
        </button>

        <div className="space-y-2">
          <Label htmlFor="display-area" className="text-sm font-medium">
            Resultado do cálculo:
          </Label>
          <Textarea
            id="display-area"
            placeholder="O resultado aparecerá aqui..."
            readOnly
            value={answer}
            className="w-full h-32"
          />
        </div>
      </form>
    </div>
  )
}

export default InputsApi
