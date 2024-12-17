import React, { useState } from 'react';
import './styles.css'; // Import your styles here
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedRecipes from './components/FeaturedRecipes';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import Categories from './components/Categories';
import SubmitRecipe from './components/SubmitRecipe';
import Favorites from './components/Favorites';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  // Handle search query change
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} /> {/* Pass the search handler to Navbar */}
      <HeroSection />
      <FeaturedRecipes searchQuery={searchQuery} /> {/* Pass the search query to FeaturedRecipes */}
      <RecipeOfTheDay />
      <Categories />
      <SubmitRecipe />
      <Favorites />
      <Contact />
      <Footer />

      {/* Login Modal */}
      <Login />
      
      {/* Register Modal */}
      <Register />
    </>
  );
};

export default App;