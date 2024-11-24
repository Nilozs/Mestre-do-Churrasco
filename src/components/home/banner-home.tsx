import { Link } from "react-router-dom"
import { Card, CardContent } from "../ui/card"

type Props = {}

const BannerHome = (props: Props) => {
  return (
    <Link to="/churrascometro">
      <Card className="bg-custom-orange text-white mb-6">
        <CardContent className="p-4 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-lg">Prepare sua Pizza</h2>
            <Link to="/churrascometro">
              <p className="text-sm">Tira suas duvidas com o Gemini</p>
            </Link>
          </div>
          <div className="flex items-center">
            <img
              src="/pizza-icon.png"
              width={60}
              height={60}
              alt="Ice cream"
              className="mr-2"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default BannerHome
