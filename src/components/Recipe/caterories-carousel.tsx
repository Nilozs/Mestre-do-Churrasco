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
<div></div>
  )
}

export default CategoryCarousel
