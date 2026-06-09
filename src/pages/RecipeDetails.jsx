import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMealById } from "../services/mealApi";
import LoadingSpinner from "../components/LoadingSpinner";

function RecipeDetails() {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      const data = await getMealById(id);
      setMeal(data);
    }

    fetchMeal();
  }, [id]);

  if (!meal) {
  return <LoadingSpinner />;
}

  return (
    <section className="bg-gray-50 min-h-screen px-8 py-10">

      {/* Back Button */}
      <Link
        to="/"
        className="mb-8 inline-flex items-center rounded-full bg-red-500 px-6 py-3 text-white transition hover:bg-red-600"
      >
        ← Back to Home
      </Link>

      {/* Top Section */}
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

        {/* Image */}
        <div>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full rounded-3xl shadow-xl"
          />
        </div>

        {/* Info */}
        <div>

          <p className="mb-3 uppercase tracking-widest text-red-500">
            {meal.strCategory}
          </p>

          <h1 className="mb-4 text-5xl font-bold">
            {meal.strMeal}
          </h1>

          <div className="mb-6 flex gap-4">

            <span className="rounded-full bg-red-100 px-4 py-2 text-red-500">
              🍽 {meal.strCategory}
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 text-green-600">
              🌍 {meal.strArea}
            </span>

          </div>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            Learn how to prepare this delicious recipe step by
            step using authentic ingredients and cooking
            instructions.
          </p>

          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-red-500 px-8 py-4 text-white transition hover:bg-red-600"
          >
            ▶ Watch Recipe Video
          </a>

        </div>
      </div>

      {/* Ingredients */}
      <div className="mx-auto mt-20 max-w-7xl">

        <h2 className="mb-8 text-4xl font-bold">
          Ingredients
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {Array.from({ length: 20 }, (_, i) => {
            const ingredient =
              meal[`strIngredient${i + 1}`];

            const measure =
              meal[`strMeasure${i + 1}`];

            return ingredient &&
              ingredient.trim() !== "" ? (
              <div
                key={i}
                className="rounded-2xl bg-white p-4 shadow-md"
              >
                <span className="font-semibold text-red-500">
                  {ingredient}
                </span>

                <p className="mt-1 text-gray-500">
                  {measure}
                </p>
              </div>
            ) : null;
          })}

        </div>

      </div>

      {/* Instructions */}
      <div className="mx-auto mt-20 max-w-7xl">

        <h2 className="mb-8 text-4xl font-bold">
          Cooking Instructions
        </h2>

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <p className="whitespace-pre-line leading-9 text-gray-700">
            {meal.strInstructions}
          </p>

        </div>

      </div>

    </section>
  );
}

export default RecipeDetails;