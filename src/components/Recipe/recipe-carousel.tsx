import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface RecipeCarouselProps {
  recipes: Array<{ id: number; name: string; image: string }>
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({ recipes }) => {
  return (
    <section className="mb-8">
      <div className="flex justify-between items-center mb-4 px-8">
        {" "}
        <h2 className="text-lg font-bold">Populares</h2>
        <a href="#" className="text-teal-500">
          Ver todos
        </a>
      </div>
      <div className="w-full flex justify-center">
        <Carousel opts={{ align: "start" }} className="w-full max-w-md">
          <CarouselContent>
            {recipes.map(({ id, name, image }) => (
              <CarouselItem key={id} className="basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-center">{name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default RecipeCarousel
