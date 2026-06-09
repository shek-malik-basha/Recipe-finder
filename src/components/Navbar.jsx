import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-red-100 bg-[#FFF8F5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition hover:scale-105"
        >
          <img
            src={logo}
            alt="Recipe Finder"
            className="h-16 w-16 object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold text-black">
              Recipe Finder
            </h1>

            <p className="text-sm text-gray-500">
              Discover & Save Recipes
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-10 font-medium">

          <Link
            to="/"
            className="relative transition duration-300 hover:text-red-500"
          >
            Home
          </Link>

          <Link
            to="/"
            className="relative transition duration-300 hover:text-red-500"
          >
            Recipes
          </Link>

          <Link
            to="/favorites"
            className="relative transition duration-300 hover:text-red-500"
          >
            Favorites
          </Link>

          <button className="rounded-full bg-red-500 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:shadow-xl">
            Login
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;