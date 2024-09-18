import { IonIcon } from "@ionic/react"
import { arrowBack, chevronForward, search } from "ionicons/icons"
import { useHistory } from "react-router-dom"

const SearchPage = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  return (
    <div className="max-w-md mx-auto bg-white mb-56 p-4">
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

      <div className="flex space-x-2 mb-6">
        <button className="px-4 py-2 bg-teal-500 text-white rounded-full">
          Bovino
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-full">Suino</button>
        <button className="px-4 py-2 bg-gray-200 rounded-full">Peixes</button>
      </div>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Popular Recipes</h2>
          <a href="#" className="text-teal-500">
            View All
          </a>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {["Egg & Avocado", "Bowl of rice", "Chicken Stew"].map(
            (title, index) => (
              <div key={index} className="flex-none w-24">
                <img
                  src={`/recipe1.jpg`}
                  alt={title}
                  className="w-24 h-24 object-cover rounded-lg mb-2"
                />
                <p className="text-sm">{title}</p>
              </div>
            ),
          )}
        </div>
      </section>
    </div>
  )
}

export default SearchPage
