import React, { useState } from 'react';

const SubmitRecipe = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeImage, setRecipeImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Recipe Title:', recipeTitle);
    console.log('Recipe Description:', recipeDescription);
    console.log('Recipe Image:', recipeImage);
  };

  return (
    <section id="submit-recipe">
      <div className="container">
        <h2 className="text-center section-title">Submit Your Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipe-title">Recipe Title</label>
            <input
              type="text"
              className="form-control"
              id="recipe-title"
              placeholder="Enter recipe title"
              value={recipeTitle}
              onChange={(e) => setRecipeTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="recipe-description">Description</label>
            <textarea
              className="form-control"
              id="recipe-description"
              rows="4"
              placeholder="Describe your recipe"
              value={recipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
  <label htmlFor="recipe-image">Upload Image</label>
  <input
    type="file"
    className="form-control-file cursor-pointer"
    id="recipe-image"
    onChange={(e) => setRecipeImage(e.target.files[0])}
  />
</div>
          <button type="submit" className="btn btn-success">
            Submit Recipe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitRecipe;