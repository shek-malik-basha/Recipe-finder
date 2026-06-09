import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (item) => item.id !== id
    );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <section className="min-h-screen bg-gray-50 px-8 py-12">

      {/* Header */}
      <div className="text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
          Saved Recipes
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          My Favorites 
        </h1>

        <p className="mt-4 text-gray-500">
          All your favorite recipes in one beautiful place.
        </p>

      </div>

      {/* Empty State */}
      {favorites.length === 0 ? (
        <div className="mt-20 text-center">

          <div className="mb-6 text-7xl">
            ❤️
          </div>

          <h2 className="text-4xl font-bold">
            No Favorites Yet
          </h2>

          <p className="mt-4 text-gray-500">
            Save recipes and they'll appear here.
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-red-500 px-8 py-4 text-white transition hover:bg-red-600"
          >
            Browse Recipes
          </Link>

        </div>
      ) : (
        <div className="mx-auto mt-14 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">

          {favorites.map((recipe) => (
            <div
              key={recipe.id}
              className="group rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <Link to={`/recipe/${recipe.id}`}>

                <div className="relative flex justify-center">

                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-36 w-36 rounded-full border-4 border-red-100 object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute right-6 top-2 rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold text-white">
                    ★ 4.8
                  </div>

                </div>

                <h3 className="mt-4 text-center text-lg font-bold text-red-500">
                  {recipe.title}
                </h3>

                <p className="mt-2 text-center text-sm text-gray-500">
                  Ready whenever you're hungry.
                </p>

              </Link>

              <div className="mt-5 flex justify-center">

                <button
                  onClick={() => removeFavorite(recipe.id)}
                  className="rounded-full bg-red-500 px-5 py-2 text-sm text-white transition hover:bg-red-600 hover:shadow-lg"
                >
                  Remove 
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default Favorites;