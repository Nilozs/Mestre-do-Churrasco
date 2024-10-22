import { Geolocation } from "@capacitor/geolocation"
import React, { useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const CurrentLocationMap: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null,
  )

  const getCurrentLocation = async () => {
    const position = await Geolocation.getCurrentPosition()
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <div className="w-full h-96">
      {location ? (
        <MapContainer center={location} zoom={15} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={location}>
            <Popup>Você está aqui!</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Carregando mapa...</p>
      )}
    </div>
  )
}

export default CurrentLocationMap
