import React from 'react';

const categories = [
  { name: 'Desserts', img: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/06/LINK-TRAFFIC-18.jpg?im=AspectCrop=(16,9);Resize,width=742;' },
  { name: 'Appetizers', img: 'https://zenandhoney.com/wp-content/uploads/2024/03/cold-party-appetizers.jpg' },
  { name: 'Breakfast', img: 'https://www.kateskitchenkc.com/wp-content/uploads/2022/12/breakfast-served-with-coffee-juice-egg-and-rolls.jpg_s1024x1024wisk20c81oJyNsUEkDZzX8Qf4kEuj3pnxPHHA5MLVeRzPEr-vQ.jpg' },
  { name: 'Beverages', img: 'https://media.licdn.com/dms/image/D4D12AQH7hMzglBJzVQ/article-cover_image-shrink_720_1280/0/1707133169052?e=2147483647&v=beta&t=NP7ebfS4IJRm5v5fAtEQOKuFWrRQXZhRA7VH-Zt1jvo' },
  { name: 'Vegan', img: 'https://media.cnn.com/api/v1/images/stellar/prod/191101102722-vegan-diet-stock.jpg?q=w_3000,h_2002,x_0,y_0,c_fill' },
  { name: 'Seafood', img: 'https://t3.ftcdn.net/jpg/01/16/29/76/360_F_116297634_dByDlQaap469q16Ls0qOaUVmicqAQDzu.jpg' },
  { name: 'Salads', img: 'https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/06/healthy-cobb-salad-steps-sq-026.jpg' },
  { name: 'Main Course', img: 'https://media.istockphoto.com/id/1403973419/photo/table-top-of-food-spread-on-table.jpg?s=612x612&w=0&k=20&c=2cROUMurZUtuvqF-bp8lViZ0wDXBNkZBcIjQj2QQlec=' },
];

const PopularCategories = () => {
  return (
    <section id="categories" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center section-title">Explore by Categories</h2>
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card shadow-lg text-center category-card">
                <img
                  src={category.img}
                  className="card-img-top img-fluid category-img"
                  alt={category.name}
                  onError={(e) => e.target.src = 'https://via.placeholder.com/300x200'} // Fallback image
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