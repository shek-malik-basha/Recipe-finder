function Categories() {
  const categories = [
    "Chicken",
    "Seafood",
    "Dessert",
    "Vegetarian",
    "Beef",
    "Pasta",
  ];

  return (
   <section className="bg-white">
  <div className="mx-auto max-w-6xl px-10 py-20">

      <p className="text-center text-sm font-semibold uppercase tracking-widest text-red-500">
        Browse Categories
      </p>

      <h2 className="mt-2 text-center text-5xl font-bold">
        Recipe Categories
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-center text-gray-500">
        Explore recipes based on your favorite food categories.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">

        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-red-200 bg-white px-8 py-4 font-medium shadow-sm transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg"
          >
            {category}
          </button>
        ))}

      </div>
</div>
    </section>
  );
}

export default Categories;