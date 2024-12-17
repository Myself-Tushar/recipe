import React from 'react';

const Favorites = () => {
  return (
    <section id="favorites" className="py-5">
      <div className="container">
        <h2 className="text-center section-title">My Favorite Recipes</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card recipe-card shadow-lg">
              <img
                src="https://source.unsplash.com/300x200/?favorite"
                className="card-img-top"
                alt="Favorite Recipe"
              />
              <div className="card-body">
                <h5 className="card-title">Favorite Recipe</h5>
                <a href="#" className="btn btn-success">
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;