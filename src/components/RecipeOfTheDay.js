import React from 'react';

const RecipeOfTheDay = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        {/* First Recipe of the Day */}
        <h3 className="text-2xl font-bold mb-4">Recipe of the Day</h3>
        <p className="text-lg">"Grilled Salmon with Lemon Butter Sauce"</p>
        <img
          src="https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg"
          alt="Grilled Salmon"
          className="mx-auto mt-4 rounded-lg shadow-md"
          style={{ width: '400px', height: '300px', objectFit: 'cover' }}
        />
      </div>

      {/* Second Recipe Section */}
      <div className="container mx-auto text-center mt-8">
        <h3 className="text-2xl font-bold mb-4">New Recipe Highlight</h3>
        <p className="text-lg">"Chocolate Lava Cake"</p>
        <img
          src="https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg"
          alt="Chocolate Lava Cake"
          className="mx-auto mt-4 rounded-lg shadow-md"
          style={{ width: '400px', height: '300px', objectFit: 'cover' }}
        />
      </div>

      {/* Third Recipe Section */}
      <div className="container mx-auto text-center mt-8">
        <h3 className="text-2xl font-bold mb-4">Special Dessert of the Day</h3>
        <p className="text-lg">"Classic Cheesecake"</p>
        <img
          src="https://simplyscrumptiouseats.com/wp-content/uploads/2021/11/philadelphia-cheesecake-feature.jpg"
          alt="Classic Cheesecake"
          className="mx-auto mt-4 rounded-lg shadow-md"
          style={{ width: '400px', height: '300px', objectFit: 'cover' }}
        />
      </div>
    </section>
  );
};

export default RecipeOfTheDay;