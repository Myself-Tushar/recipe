import React from 'react';
import RecipeCard from './RecipeCard';

const FeaturedRecipes = ({ searchQuery }) => {
  const recipes = [
    { title: 'Delicious Pasta', imageUrl: 'https://i.ytimg.com/vi/iQ38VKAjQgo/maxresdefault.jpg', description: 'A delightful pasta recipe you’ll love.' },
    { title: 'Cheesy Pizza', imageUrl: 'https://static.toiimg.com/photo/53110049.cms', description: 'A classic cheesy pizza recipe.' },
    { title: 'Healthy Salad', imageUrl: 'https://www.homemademastery.com/wp-content/uploads/2022/06/my-big-fat-dinner-salad-IMG_0691-720x720.jpg', description: 'A refreshing and healthy salad recipe.' },
    { title: 'Veggie Burger', imageUrl: 'https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg', description: 'A healthy and tasty veggie burger recipe.' },
    { title: 'Creamy Smoothie', imageUrl: 'https://www.wellplated.com/wp-content/uploads/2020/07/Creamy-Watermelon-Smoothie.jpg', description: 'A refreshing and creamy fruit smoothie to brighten your day.' },
    { title: 'Strawberry cake', imageUrl: 'https://www.simplyrecipes.com/thmb/_HjgacnVkPBw0Milr3aReqnfb54=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Strawberry-Cake-LEAD-9-02d65bfdfd564146804192f8f6ceebb8.jpg', description: 'A light and fluffy shortcake topped with fresh strawberries and whipped cream.' },
  ];

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="featured" className="py-5">
      <div className="container">
        <h2 className="text-center section-title">Featured Recipes</h2>
        <div className="row">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                title={recipe.title}
                imageUrl={recipe.imageUrl}
                description={recipe.description}
              />
            ))
          ) : (
            <p className="text-center">No recipes found matching your search.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;