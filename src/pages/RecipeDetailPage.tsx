import { MaxWidthWrapper } from "@/components/animation"
import { Button } from "@/components/ui/button"
import { recipes } from "@/data/recipes"
import { Heart } from "lucide-react"
import { useHistory, useParams } from "react-router-dom"

const RecipeDetailPage = () => {
  const history = useHistory()

  const { id } = useParams<{ id: string }>()
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id))

  if (!recipe) {
    return <p>Receita não encontrada!</p>
  }

  const goBack = () => {
    history.goBack()
  }

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="relative">
          <button
            className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md"
            onClick={goBack}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img
            src={recipe.image}
            alt="Chicken Burger"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="flex-1 p-6 bg-white rounded-t-3xl -mt-6 overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 break-words">
                {recipe.name}
              </h1>
            </div>
            <Heart className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-gray-600 mb-6 break-words">
            {recipe.instructions}
          </p>
          <div className="mb-4">
            <h2 className="font-semibold text-gray-800 mb-2">Ingredientes</h2>
            <ul className="list-disc list-inside text-gray-600 max-h-48 overflow-y-auto">
              {recipe.ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default RecipeDetailPage
