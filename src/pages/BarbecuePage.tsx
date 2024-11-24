import { MaxWidthWrapper } from "@/components/animation"
import { churrascariasCampoGrande } from "@/data/steakhouse"
import { useFavorites } from "@/hooks/useFavorites"
import { ChevronLeft, Heart, MoreHorizontal, Star } from "lucide-react"
import { useHistory, useParams } from "react-router-dom"

const BarbecuePage = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const mercado = churrascariasCampoGrande.find(
    (mercado) => mercado.id === parseInt(id),
  )


  if (!mercado) {
    return <p>Mercado não encontrado!</p>
  }

  const goBack = () => {
    history.goBack()
  }

  return (
    <div className="mx-auto bg-white h-screen flex flex-col space-y-2">
      <MaxWidthWrapper>
        <div className="relative flex-shrink-0">
          <img
            src={mercado.img}
            alt={mercado.nome}
            className="w-full h-[200px] object-cover"
          />
          <button
            className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md"
            onClick={goBack}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <div className="p-4 flex-grow overflow-auto">
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center bg-orange-100 rounded-md px-2 py-1">
              <Star className="w-4 h-4 text-custom-orange fill-current" />
              <span className="ml-1 text-sm font-semibold text-custom-yellow">
                Top {mercado.top}
              </span>
            </div>
          </div>
          <h1 className="text-xl font-bold mb-1 text-black">{mercado.nome}</h1>
          <p className="text-sm text-gray-500 mb-4">{mercado.descricao}</p>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default BarbecuePage
