function Footer() {
  return (
    <footer className="mt-20 bg-[#111827] text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-10 py-16 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-red-500">
            Recipe Finder
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            Discover and save delicious recipes from around
            the world. Explore new cuisines, cooking ideas,
            and your favorite dishes all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <a
                href="/"
                className="transition hover:text-red-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/"
                className="transition hover:text-red-400"
              >
                Recipes
              </a>
            </li>

            <li>
              <a
                href="/favorites"
                className="transition hover:text-red-400"
              >
                Favorites
              </a>
            </li>

          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">
            Connect
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <a
                href="https://github.com/shek-malik-basha"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-red-400"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/malik-basha-shek/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-red-400"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="mailto:malikbashshaik09@gmail.com"
                className="transition hover:text-red-400"
              >
                malikbashshaik09@gmail.com
              </a>
            </li>

          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 Recipe Finder • Built with React & Tailwind CSS
      </div>

    </footer>
  );
}

export default Footer;