import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { searchMeals } from "../services/mealApi";
import LoadingSpinner from "./LoadingSpinner";

function FeaturedRecipes({ searchTerm }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setLoading(true);

      const data = await searchMeals(
        searchTerm || "chicken"
      );

      setMeals(data || []);

      setLoading(false);
    }

    fetchMeals();
  }, [searchTerm]);

  if (loading) {
  return <LoadingSpinner />;
}
  return (
    <section className="bg-white px-10 pt-6 pb-16">
     <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[4px] text-red-500">
  Today's Special Offers
</p>

      {meals.length === 0 ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold">
            No recipes found 
          </h3>

          <p className="mt-4 text-gray-500">
            Try searching for another recipe.
          </p>
        </div>
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {meals.slice(0, 8).map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              id={meal.idMeal}
              image={meal.strMealThumb}
              title={meal.strMeal}

            />
          ))}
        </div>
      )}
    </section>
  );
}

export default FeaturedRecipes;