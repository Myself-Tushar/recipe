import React from 'react';

const Hero = () => {
  return (
    <section className="hero-secction">
      <div className="container text-center">
        <h1>Welcome to Tech TSR Recipe App</h1><br></br>
        <h5>Discover, cook, and share your favorite recipes.</h5>
        <a href="#featured" className="btn btn-success btn-lg mt-4">Explore Recipes</a>
      </div>
    </section>
  );
};

export default Hero;