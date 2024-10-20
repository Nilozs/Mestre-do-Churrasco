import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFavorites } from "@/hooks/useAvaliable" 
import { Heart, Search } from "lucide-react"

export default function FavoriteMeals() {
  const { favoriteItems, removeFavoriteItem, searchTerm, handleSearch } =
    useFavorites()

  return (
    <div className="max-w-md mx-auto min-h-screen text-black rounded-lg overflow-auto shadow-lg">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Favoritos</h1>
        <div className="relative mb-4">
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search"
            className="pl-10 w-full text-black border-gray-700"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        <div className="space-y-4 text-black">
          {favoriteItems.length > 0 ? (
            favoriteItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 border-b border-gray-700 pb-4 last:border-b-0 last:pb-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="flex-shrink-0"
                  onClick={() => removeFavoriteItem(item.id)}
                >
                  <Heart className="h-4 w-4 text-red-500" />
                  <span className="sr-only">Unfavorite</span>
                </Button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No favorite meals found.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
