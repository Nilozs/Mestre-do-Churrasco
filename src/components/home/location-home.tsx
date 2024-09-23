import { MapPin } from "lucide-react"

const LocationBar = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <MapPin className="w-5 h-5 text-green-500 mr-2" />
        <div>
          <p className="text-xs text-gray-500">Current location</p>
          <p className="text-sm font-semibold">Jl. Soekarno Hatta 15A...</p>
        </div>
      </div>
    </div>
  )
}

export default LocationBar
