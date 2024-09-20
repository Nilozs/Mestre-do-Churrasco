import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { IonIcon } from "@ionic/react"
import { arrowBack, search } from "ionicons/icons"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { categories } from "../data/categories"
import { recipes } from "../data/recipes"

const SearchPage = () => {
  const history = useHistory()
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const goBack = () => {
    history.goBack()
  }

  const filteredRecipes =
    selectedCategories.length > 0
      ? recipes.filter((recipe) => selectedCategories.includes(recipe.category))
      : recipes

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category],
    )
  }

  return (
    <div className="max-w-md mx-auto bg-white mb-80 p-4">
      <header className="flex items-center mb-6">
        <button onClick={goBack}>
          <IonIcon icon={arrowBack} className="w-6 h-6 mr-4" />
        </button>
        <h1 className="text-xl font-bold">Pesquisar</h1>
      </header>

      <div className="relative mb-6">
        <IonIcon
          icon={search}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-100"
        />
      </div>

      <Carousel opts={{ align: "start" }} className="w-full max-w-sm mb-6">
        <CarouselContent>
          {categories.map((category) => (
            <CarouselItem key={category.id} className="basis-1/2 lg:basis-1/3">
              <label
                className={`flex items-center px-4 py-2 rounded-full cursor-pointer ${
                  selectedCategories.includes(category.name)
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCheckboxChange(category.name)}
                  className="hidden"
                />
                <span>{category.name}</span>
              </label>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Receitas Populares</h2>
          <a href="#" className="text-teal-500">
            Ver todos
          </a>
        </div>
        <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
          <CarouselContent>
            {filteredRecipes.map(({ id, name, image }) => (
              <CarouselItem key={id} className="basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm">{name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  )
}

export default SearchPage
