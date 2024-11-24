import { MaxWidthWrapper } from "@/components/animation"
import { recipes } from "@/data/recipes"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"

const RecipeDetailPage = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id))
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites")
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites)
      const isAlreadyFavorited = favorites.some(
        (fav: any) => fav.id === recipe?.id,
      )
      setIsFavorited(isAlreadyFavorited)
    }
  }, [recipe?.id])

  if (!recipe) {
    return <p>Receita não encontrada!</p>
  }

  const goBack = () => {
    history.goBack()
  }

  const toggleFavorite = () => {
    const storedFavorites = localStorage.getItem("favorites")
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : []

    if (isFavorited) {
      favorites = favorites.filter((fav: any) => fav.id !== recipe.id)
    } else {
      favorites.push(recipe)
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))
    setIsFavorited(!isFavorited)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <MaxWidthWrapper>
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
            alt={recipe.name}
            className="w-full h-44 object-cover"
          />
        </div>
        <div className="flex-1 p-6 bg-white rounded-t-3xl -mt-6 overflow-y-auto space-y-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 break-words">
                {recipe.name}
              </h1>
            </div>
            <button
              onClick={toggleFavorite}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isFavorited ? "bg-red-500" : "bg-gray-200"
              }`}
            >
              <Heart
                className={`w-6 h-6 transition-colors duration-200 ${
                  isFavorited ? "text-white" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          <div>
            <iframe
              className="w-auto h-auto"
              src={recipe.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold text-gray-800 mb-2">Ingredientes</h2>
            <ul className="list-disc list-inside text-gray-600 max-h-48 overflow-y-auto">
              {recipe.ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default RecipeDetailPage
