import aboutChef from "../assets/about-chef.png";

function About() {
  return (
    <section className="bg-[#FFF8F3]">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-20 px-4 py-16">

      {/* Left Side */}
      <div className="relative flex flex-1 justify-start -ml-10">

        {/* Background Glow */}
        <div className="absolute h-80 w-80 rounded-full bg-red-100 blur-3xl opacity-60"></div>

        <img
          src={aboutChef}
          alt="Chef"
          className="relative z-10 ml-[-60px] w-[520px] transition duration-300 hover:scale-105"
        />

      </div>

      {/* Right Side */}
      <div className="max-w-xl">

        <p className="mb-3 font-semibold uppercase tracking-[4px] text-red-500">
          About Recipe Finder
        </p>

        <h2 className="text-5xl font-bold leading-tight">
          Discover Recipes
          <span className="block text-red-500">
            Made For Everyone
          </span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-500">
          Explore thousands of recipes from around the world.
          Find healthy meals, quick dinners, desserts, and
          cooking inspiration for every occasion. Save your
          favorite recipes and discover new dishes every day.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-5">

          <div className="flex items-center gap-3">
            <span className="text-xl text-green-500">✔</span>
            <p className="font-medium">Fresh Ingredients</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl text-green-500">✔</span>
            <p className="font-medium">Healthy Recipes</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl text-green-500">✔</span>
            <p className="font-medium">Easy Cooking Guides</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl text-green-500">✔</span>
            <p className="font-medium">Save Favorites</p>
          </div>

        </div>

        <button className="mt-10 rounded-full bg-red-500 px-10 py-4 font-medium text-white transition duration-300 hover:bg-red-600 hover:shadow-lg">
          Learn More
        </button>

      </div>
  </div>
    </section>
  );
}

export default About;