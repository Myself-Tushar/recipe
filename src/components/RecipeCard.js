import React from 'react';

const RecipeCard = ({ title, imageUrl, description }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition duration-300">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;