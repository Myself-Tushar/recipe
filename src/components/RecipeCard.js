import React from 'react';

const RecipeCard = ({ title, imageUrl, description }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card recipe-card shadow-lg">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
          <a href="#" className="btn btn-success mt-2">View Recipe</a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;