import { Geolocation } from "@capacitor/geolocation"
import React, { useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const UpdateMapView: React.FC<{ location: { lat: number; lng: number } }> = ({ location }) => {
  const map = useMap()
  useEffect(() => {
    if (location) {
      map.setView([location.lat, location.lng], 15) // Move rapidamente para o centro
    }
  }, [location, map])
  return null
}

const CurrentLocationMap: React.FC = () => {
  const [mapState, setMapState] = useState<{
    current: { lat: number; lng: number } | null
    search: { lat: number; lng: number } | null
  }>({
    current: null,
    search: null,
  })
  const [searchLocation, setSearchLocation] = useState<string>("")

  const getCurrentLocation = async () => {
    try {
      const position = await Geolocation.getCurrentPosition()
      setMapState((prev) => ({
        ...prev,
        current: { lat: position.coords.latitude, lng: position.coords.longitude },
      }))
    } catch (error) {
      console.error("Erro ao obter localização atual:", error)
    }
  }

  const searchForLocation = async () => {
    if (!searchLocation) return
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchLocation)}`
      )
      const results = await response.json()
      if (results.length > 0) {
        const { lat, lon } = results[0]
        setMapState((prev) => ({
          ...prev,
          search: { lat: parseFloat(lat), lng: parseFloat(lon) },
        }))
      } else {
        alert("Local não encontrado.")
      }
    } catch (error) {
      console.error("Erro ao buscar localização:", error)
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  const { current, search } = mapState

  return (
    <div className="w-full h-auto p-0.5">
      <div>
        <input
          type="text"
          placeholder="Digite um local para buscar..."
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
          className="p-2 border border-gray-200 rounded w-2/3 text-white"
        />
        <button
          onClick={searchForLocation}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Buscar
        </button>
      </div>
      <div className="w-full h-96">
        {current ? (
          <MapContainer
            center={current}
            zoom={15}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              updateWhenIdle={true}
              updateWhenZooming={false}
            />
            <Marker position={current}>
              <Popup>Você está aqui!</Popup>
            </Marker>
            {search && (
              <Marker position={search}>
                <Popup>Local buscado!</Popup>
              </Marker>
            )}
            <UpdateMapView location={search || current} />
          </MapContainer>
        ) : (
          <p>Carregando mapa...</p>
        )}
      </div>
    </div>
  )
}

export default CurrentLocationMap
