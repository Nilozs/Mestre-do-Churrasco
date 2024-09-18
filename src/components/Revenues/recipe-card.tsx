const RecipeCard: React.FC<{ recipe: any }> = ({ recipe }) => {
    return (
      <div className="w-full max-w-sm rounded-lg overflow-hidden bg-white shadow-md">
        <img
          src={recipe.image}
          alt={recipe.name}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{recipe.name}</h2>
          <p className="text-gray-500">{recipe.category}</p>
        </div>
      </div>
    )
  }
  