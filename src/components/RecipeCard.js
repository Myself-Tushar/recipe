import React from 'react';

const RecipeCard = ({ title, imageUrl, description }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="card-img-top img-fluid" // Add img-fluid class for responsiveness
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;