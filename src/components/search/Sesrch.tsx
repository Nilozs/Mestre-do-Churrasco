import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import React from "react"

export default function PaginaPesquisa() {
  return (
    <div className="h-screen mx-auto p-4 space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input type="search" placeholder="Pesquisar..." className="pl-10" />
      </div>

      <Carousel>
        <CarouselContent>
          {[1, 2, 3].map((_, index) => (
            <CarouselItem key={index}>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg?height=160&width=300`}
                  alt={`Destaque ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-bold">
                    Destaque {index + 1}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="space-y-6">
        <CarouselSection
          title="Churrascarias"
          items={[
            {
              name: "Churrascaria 1",
              image: "/market2.png",
            },
            {
              name: "Churrascaria 2",
              image: "/placeholder.svg?height=100&width=150",
            },
            {
              name: "Churrascaria 3",
              image: "/placeholder.svg?height=100&width=150",
            },
            {
              name: "Churrascaria 4",
              image: "/placeholder.svg?height=100&width=150",
            },
          ]}
        />

        <CarouselSection
          title="Mercados"
          items={[
            {
              name: "Mercado 1",
              image: "/placeholder.svg?height=100&width=150",
            },
            {
              name: "Mercado 2",
              image: "/placeholder.svg?height=100&width=150",
            },
            {
              name: "Mercado 3",
              image: "/placeholder.svg?height=100&width=150",
            },
            {
              name: "Mercado 4",
              image: "/placeholder.svg?height=100&width=150",
            },
          ]}
        />

        <CarouselSection
          title="Receitas"
          items={[
            {
              name: "Receita 1",
              image: "/placeholder.svg?height=100&width=150",
            },
            {
              name: "Receita 2",
              image: "/placeholder.svg?height=100&width=150",
            },
            {
              name: "Receita 3",
              image: "/placeholder.svg?height=100&width=150",
            },
            {
              name: "Receita 4",
              image: "/placeholder.svg?height=100&width=150",
            },
          ]}
        />
      </div>
    </div>
  )
}

interface CarouselSectionProps {
  title: string
  items: { name: string; image: string }[]
}

function CarouselSection({ title, items }: CarouselSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <Carousel className="overflow-x-auto">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3">
              <Card>
                <CardContent className="p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-24 object-cover rounded-md"
                  />
                  <p className="mt-2 text-sm text-center">{item.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
