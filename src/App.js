import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedRecipes from './components/FeaturedRecipes';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import Categories from './components/Categories';
import SubmitRecipe from './components/SubmitRecipe';
import Favorites from './components/Favorites';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedRecipes />
      <RecipeOfTheDay />
      <Categories />
      <SubmitRecipe />
      <Favorites />
      <Contact />
      <Footer />
    </>
  );
};

export default App;