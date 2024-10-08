import { useEffect, useState } from "react"

interface FavoriteItem {
  id: number
  nome: string
  img: string
  rating: number
  freteGratis?: boolean
  tempoEntrega?: string
  descricao: string
}

export const useFavorites = (item: FavoriteItem | undefined) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  useEffect(() => {
    if (!item) return
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    const isFavorited = savedFavorites.some(
      (favorite: FavoriteItem) => favorite.id === item.id,
    )
    setIsFavorite(isFavorited)
  }, [item])

  const toggleFavorite = () => {
    if (!item) return
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")

    if (isFavorite) {
      const updatedFavorites = savedFavorites.filter(
        (favorite: FavoriteItem) => favorite.id !== item.id,
      )
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    } else {
      savedFavorites.push(item)
      localStorage.setItem("favorites", JSON.stringify(savedFavorites))
    }

    setIsFavorite(!isFavorite)
  }

  return { isFavorite, toggleFavorite }
}
