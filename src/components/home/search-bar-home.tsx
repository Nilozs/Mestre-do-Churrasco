import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="relative mb-4">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="pesquisar"
        className="pl-10 pr-4 py-2 w-full"
      />
    </div>
  )
}

export default SearchBar
