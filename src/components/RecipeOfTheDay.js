import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeOfTheDay = () => {
  const recipes = [
    { title: 'Grilled Salmon', imageUrl: 'https://www.thecookierookie.com/wp-content/uploads/2023/05/featured-grilled-salmon-recipe.jpg', description: 'A tender grilled salmon served with lemon butter sauce.' },
    { title: 'Chocolate Lava Cake', imageUrl: 'https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg', description: 'A rich and gooey chocolate dessert to satisfy your cravings.' },
    { title: 'Classic Cheesecake', imageUrl: 'https://simplyscrumptiouseats.com/wp-content/uploads/2021/11/philadelphia-cheesecake-feature.jpg', description: 'A creamy and classic cheesecake with a golden crust.' },
    { title: 'Spaghetti Carbonara', imageUrl: 'https://oldcutkitchen.com/wp-content/uploads/2020/04/IMG_4807.jpg', description: 'A traditional Italian pasta dish made with eggs and pancetta.' },
    { title: 'Vegan Buddha Bowl', imageUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456.jpg', description: 'A colorful bowl filled with fresh veggies and grains.' },
    { title: 'Garlic Butter Shrimp', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwln4G8OgSTCpBRPBt3OxuZhidT4bFB-wVg&s', description: 'Juicy shrimp cooked in a rich garlic butter sauce.' },
  ];

  return (
    <section className="py-8 transition duration-300">
      <div className="container">
        <h2 className="text-center section-title">
          Recipe of the Day
        </h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              imageUrl={recipe.imageUrl}
              description={recipe.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeOfTheDay;