import React from 'react';

const RecipeOfTheDay = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Recipe of the Day</h3>
        <p className="text-lg">"Grilled Salmon with Lemon Butter Sauce"</p>
        <img src="https://source.unsplash.com/400x300/?salmon" alt="Grilled Salmon" className="mx-auto mt-4 rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default RecipeOfTheDay;