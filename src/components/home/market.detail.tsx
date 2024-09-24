import { ArrowBigRight } from "lucide-react"

type Props = {}

const MarketDetails = (props: Props) => {
  return (
    <div className="space-y-4 mt-5">
      <h2 className="font-semibold text-gray-800 mb-2">Veja outras</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/market2.png"
            alt="guanabara"
            width={60}
            height={60}
            className="rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-black">Guanabara</h3>
            <p className="text-sm text-gray-500">Churrascaria</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="font-semibold mr-2">Churrascaria</span>
          <button className="bg-custom-maroon text-white rounded-full p-1.5">
            <ArrowBigRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/market3.png"
            alt="Ki churrascos"
            width={60}
            height={60}
            className="rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-black">Ki churrascos</h3>
            <p className="text-sm text-gray-500">Churrascaria</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="font-semibold mr-2">Ki churrasco</span>
          <button className="bg-custom-maroon text-white rounded-full p-1.5">
            <ArrowBigRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MarketDetails
