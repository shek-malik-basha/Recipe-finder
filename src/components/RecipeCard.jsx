import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeCard({ id, image, title }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.find(
      (item) => item.id === id
    );

    setIsFavorite(!!exists);
  }, [id]);

  const addToFavorites = (e) => {
    e.preventDefault();

    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.find(
      (item) => item.id === id
    );

    if (!exists) {
      favorites.push({
        id,
        image,
        title,
      });

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      setIsFavorite(true);
    }
  };

  return (
    <Link to={`/recipe/${id}`}>
      <div className="group rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">

        {/* Image */}
        <div className="relative flex justify-center">

          <img
            src={image}
            alt={title}
            className="h-36 w-36 rounded-full border-4 border-red-100 object-cover transition duration-300 group-hover:scale-105"
          />

          <div className="absolute right-8 top-2 rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold text-white">
            ★ 4.8
          </div>

        </div>

        {/* Category Dots */}
        <div className="mt-4 flex justify-center gap-1">
          <span className="h-4 w-4 rounded-full bg-red-300"></span>
          <span className="h-4 w-4 rounded-full bg-yellow-300"></span>
          <span className="h-4 w-4 rounded-full bg-green-300"></span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-center text-lg font-bold text-red-500">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-center text-sm text-gray-500">
          Discover delicious recipes and cooking inspiration.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex justify-center gap-3">

          <button className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
            View Recipe
          </button>

          <button
            onClick={addToFavorites}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
              isFavorite
                ? "bg-red-500 text-white shadow-lg"
                : "border border-gray-300 bg-white hover:border-red-500 hover:text-red-500"
            }`}
          >
            {isFavorite ? "Added" : "Favorite"}
          </button>

        </div>

      </div>
    </Link>
  );
}

export default RecipeCard;