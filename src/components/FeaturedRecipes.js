import React from 'react';
import RecipeCard from './RecipeCard';

const FeaturedRecipes = () => {
  return (
    <section id="featured" className="py-5">
      <div className="container">
        <h2 className="text-center section-title">Featured Recipes</h2>
        <div className="row">
          <RecipeCard title="Delicious Pasta" imageUrl="https://source.unsplash.com/300x200/?pasta" description="A delightful pasta recipe you’ll love." />
          <RecipeCard title="Cheesy Pizza" imageUrl="https://source.unsplash.com/300x200/?pizza" description="A classic cheesy pizza recipe." />
          <RecipeCard title="Healthy Salad" imageUrl="https://source.unsplash.com/300x200/?salad" description="A refreshing and healthy salad recipe." />
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;