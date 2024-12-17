import React from 'react';

const Favorites = () => {
  return (
    <section id="favorites" className="py-5">
      <div className="container">
        <h2 className="text-center section-title">My Favorite Recipes</h2>
        <div className="row">
          {/* First Recipe Card */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card recipe-card shadow-lg">
              <img
                src="https://i.ytimg.com/vi/iQ38VKAjQgo/maxresdefault.jpg"
                className="card-img-top"
                alt="Delicious Pasta"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Delicious Pasta</h5>
                <a href="#" className="btn btn-success">
                  View Recipe
                </a>
              </div>
            </div>
          </div>

          {/* Second Recipe Card */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card recipe-card shadow-lg">
              <img
                src="https://static.toiimg.com/photo/53110049.cms"
                className="card-img-top"
                alt="Cheesy Pizza"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Cheesy Pizza</h5>
                <a href="#" className="btn btn-success">
                  View Recipe
                </a>
              </div>
            </div>
          </div>

          {/* Third Recipe Card */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card recipe-card shadow-lg">
              <img
                src="https://www.wellplated.com/wp-content/uploads/2020/07/Creamy-Watermelon-Smoothie.jpg"
                className="card-img-top"
                alt="Creamy Smoothie"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Creamy Smoothie</h5>
                
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