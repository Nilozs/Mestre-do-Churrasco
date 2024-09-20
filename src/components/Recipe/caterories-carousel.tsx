import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CategoryCarouselProps {
  categories: Array<{ id: number; name: string }>
  selectedCategories: string[]
  onCategoryChange: (category: string) => void
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
  selectedCategories,
  onCategoryChange,
}) => {
  return (
    <Carousel opts={{ align: "start" }} className="w-80  mb-6 p-6">
      <CarouselContent>
        {categories.map((category) => (
          <CarouselItem key={category.id} className="basis-1/2 lg:basis-1/3">
            <label
              className={`flex items-center px-4 py-2 rounded-full cursor-pointer ${
                selectedCategories.includes(category.name)
                  ? "bg-custom-yellow text-white"
                  : "bg-red-700 text-white"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => onCategoryChange(category.name)}
                className="hidden"
              />
              <span>{category.name}</span>
            </label>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CategoryCarousel
