import React from 'react';

const RecipeCard = ({ title, imageUrl, description }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imageUrl}
          alt={title}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;