import heroChef from "../assets/hero-chef.png";

import heroFood1 from "../assets/hero-food-1.png";
import heroFood2 from "../assets/hero-food-2.png";
import heroFood3 from "../assets/hero-food-3.png";
import heroFood4 from "../assets/hero-food-4.png";
import leaf1 from "../assets/leaf-1.png";
import leaf2 from "../assets/leaf-2.png";
import leaf3 from "../assets/leaf-3.png";
import { useNavigate } from "react-router-dom";
import { getRandomMeal } from "../services/mealApi";

function Hero({ searchTerm, setSearchTerm }) {
    const navigate = useNavigate();

const handleRandomRecipe = async () => {
  const meal = await getRandomMeal();

  navigate(`/recipe/${meal.idMeal}`);
};
  return (
    <section className="relative flex items-center justify-between px-10 py-10 overflow-hidden bg-[#FFF8F5]">

      {/* Decorative Leaves */}
      <img
        src={leaf1}
        alt=""
        className="absolute left-0 top-40 w-14 opacity-30"
      />

      <img
        src={leaf2}
        alt=""
        className="absolute bottom-20 left-[40%] w-16 opacity-20"
      />

      <img
        src={leaf3}
        alt=""
        className="absolute top-56 right-8 w-14 opacity-30"
      />

      {/* Left Content */}
      <div className="max-w-xl">

        <h1 className="text-6xl font-bold leading-tight">
          Discover Amazing
<span className="block text-red-500">
  Recipes &
</span>
Cooking Inspiration
        </h1>

        <p className="mt-8 text-xl text-gray-500">
  Search thousands of recipes, explore new cuisines,
  and save your favorite dishes for later.
</p>

{/* Search Bar */}
<input
  type="text"
  placeholder="Search recipes..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full max-w-md rounded-full border border-gray-300 px-6 py-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
/>

<div className="mt-8 flex gap-4">

  <button
    className="rounded-full bg-red-500 px-8 py-4 font-medium text-white transition hover:bg-red-600"
  >
    Explore Recipes
  </button>

  <button
    onClick={handleRandomRecipe}
    className="rounded-full border border-black px-8 py-4 font-medium transition hover:bg-gray-100"
  >
    Random Recipe
  </button>

</div>
        <div className="mt-8 flex gap-10">

  <div>
    <h3 className="text-2xl font-bold text-red-500">
      5000+
    </h3>
    <p className="text-gray-500">
      Recipes
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-red-500">
      50+
    </h3>
    <p className="text-gray-500">
      Countries
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-red-500">
      1000+
    </h3>
    <p className="text-gray-500">
      Favorites
    </p>
  </div>

</div>
      </div>

      {/* Right Content */}
      <div className="relative mr-16">
  
  <div className="absolute -left-10 top-20 h-40 w-40 rounded-full bg-red-100 blur-3xl"></div>
        {/* Top Recipe Card */}
        <div className="absolute -top-6 left-10 rounded-2xl bg-white p-3 shadow-xl">
          <div className="flex items-center gap-3">
            <img
              src={heroFood1}
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="text-sm font-semibold">
                Italian Pizza
              </p>

              <p className="text-xs text-gray-500">
                ★ 4.9
              </p>
            </div>
          </div>
        </div>

        {/* Chef */}
        <img
          src={heroChef}
          alt="Chef"
          className="w-[500px]"
        />

        {/* Floating Food Images */}

        <img
          src={heroFood1}
          alt=""
          className="absolute -top-4 right-0 w-24 rounded-full shadow-2xl animate-[bounce_4s_infinite]"
        />

        <img
          src={heroFood2}
          alt=""
          className="absolute top-52 -left-10 w-20 rounded-full shadow-2xl animate-[bounce_5s_infinite]"
        />

        <img
          src={heroFood3}
          alt=""
          className="absolute bottom-8 right-0 w-20 rounded-full shadow-2xl animate-[bounce_3s_infinite]"
        />

        <img
          src={heroFood4}
          alt=""
          className="absolute bottom-0 left-0 w-24 rounded-full shadow-2xl animate-[bounce_6s_infinite]"
        />

      </div>

    </section>
  );
}

export default Hero;