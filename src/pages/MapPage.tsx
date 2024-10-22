import CurrentLocationMap from "@/components/maps/location"
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import L, { LatLngTuple } from "leaflet"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet/dist/leaflet.css"
import { useEffect } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

const churrascarias: { name: string; position: LatLngTuple }[] = [
  {
    name: "Churrascaria Fogo de Ouro",
    position: [-22.9068, -43.1729],
  },
  {
    name: "Churrascaria Espeto de Prata",
    position: [-22.9133, -43.2096],
  },
  {
    name: "Churrascaria Boi Bravo",
    position: [-22.9707, -43.1823],
  },
]

const ResizeMap = () => {
  const map = useMap()

  useEffect(() => {
    map.invalidateSize()
  }, [map])

  return null
}

const LibraryPage = () => (
  <>
    <IonHeader></IonHeader>
    <IonContent>
      <CurrentLocationMap />
    </IonContent>
  </>
)

export default LibraryPage
