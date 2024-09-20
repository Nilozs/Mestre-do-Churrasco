import RecipeDetails from "@/components/Recipe/recipe-details"
import { IonContent } from "@ionic/react"
import { useState } from "react"
import CategoryCarousel from "../components/Recipe/caterories-carousel"
import RecipeCarousel from "../components/Recipe/recipe-carousel"
import Header from "../components/Recipe/recipe-header"
import { categories } from "../data/categories"
import { recipes } from "../data/recipes"

const RadioPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const filteredRecipes =
    selectedCategories.length > 0
      ? recipes.filter((recipe) => selectedCategories.includes(recipe.category))
      : recipes

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category],
    )
  }

  return (
    <>
      <IonContent>
        <div className="flex items-center justify-center h-full bg-gray-50">
          <div className="max-w-xl w-full mx-auto bg-white rounded-lg shadow-lg p-6">
            <Header />

            <CategoryCarousel
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />

            <RecipeCarousel recipes={filteredRecipes} />

            <div className="h-screen w-screen">
              <RecipeDetails />
            </div>
          </div>
        </div>
      </IonContent>
    </>
  )
}

export default RadioPage
