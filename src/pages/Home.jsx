import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedRecipes from "../components/FeaturedRecipes";
import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

import { useState } from "react";
function Home() {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar />
      <Hero 
       searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  />
      
      <FeaturedRecipes 
      searchTerm={searchTerm}/>
      <About />
      <Categories />
      <Footer />
    </>
  );
  
}

export default Home;