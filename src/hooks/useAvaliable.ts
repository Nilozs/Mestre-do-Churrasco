import { useEffect, useState } from "react"

interface FavoriteItem {
  id: number
  name: string
  description: string
  image: string
}

const getFavoriteItems = (): FavoriteItem[] => {
  const savedFavorites = localStorage.getItem("favorites")
  return savedFavorites ? JSON.parse(savedFavorites) : []
}

export function useFavorites() {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([])
  const [filteredItems, setFilteredItems] = useState<FavoriteItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const favorites = getFavoriteItems()
    setFavoriteItems(favorites)
    setFilteredItems(favorites)
  }, [])

  const removeFavoriteItem = (id: number) => {
    const updatedFavorites = favoriteItems.filter((item) => item.id !== id)
    setFavoriteItems(updatedFavorites)
    setFilteredItems(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    if (term === "") {
      setFilteredItems(favoriteItems)
    } else {
      const filtered = favoriteItems.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase()),
      )
      setFilteredItems(filtered)
    }
  }

  return {
    favoriteItems: filteredItems,
    removeFavoriteItem,
    searchTerm,
    handleSearch,
  }
}
