import React from 'react';

const categories = [
  { name: 'Desserts', img: 'dessert' },
  { name: 'Appetizers', img: 'appetizer' },
  { name: 'Breakfast', img: 'breakfast' },
  { name: 'Beverages', img: 'beverages' },
  { name: 'Vegan', img: 'vegan' },
  { name: 'Seafood', img: 'seafood' },
  { name: 'Salads', img: 'salad' },
  { name: 'Main Course', img: 'main-course' },
];

const PopularCategories = () => {
  return (
    <section id="categories" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center section-title">Explore by Categories</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card shadow-lg text-center">
                <img
                  src={`https://source.unsplash.com/300x200/?${category.img}`}
                  className="card-img-top"
                  alt={category.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <a href="#" className="btn btn-success">
                    Explore {category.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;