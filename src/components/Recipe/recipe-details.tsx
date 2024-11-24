import { recipes } from "@/data/recipes"
import { ChevronRight } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

type Props = {}

const RecipeDetails = (props: Props) => {
  return (
    <>
      <section>
        <div className="flex  justify-between items-center px-8">
          <h2 className="text-lg font-bold">Veja uma receita</h2>
        </div>
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`} className="block">
            <div className="flex items-center mb-4">
              <img
                src={recipe.image}
                width={80}
                height={80}
                alt={recipe.name}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div className="flex-grow">
                <h3 className="font-semibold">{recipe.name}</h3>
                <p className="text-sm text-gray-500">{recipe.category}</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}

export default RecipeDetails
