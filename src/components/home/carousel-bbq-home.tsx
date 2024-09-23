import { mercadosChurrasco } from "@/data/market"

const TopCategories = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Top Mercados de Churrasco</h3>
        <button className="text-gray-500 text-sm">Ver todos</button>
      </div>
      <div className="flex flex-wrap justify-between">
        {mercadosChurrasco.map((mercado, index) => (
          <div key={index} className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-1 flex items-center justify-center">
              <img
                src={mercado.img}
                width={32}
                height={32}
                alt={mercado.nome}
              />
            </div>
            <p className="text-xs font-semibold">{mercado.nome}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopCategories
