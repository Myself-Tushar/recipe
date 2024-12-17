import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand font-bold text-2xl" href="https://youtube.com/@tech-tsr?si=XWHQlFHDwo2cFZd2">Tech TSR</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          <i className={`fas fa-${darkMode ? 'sun' : 'moon'}`}></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#featured">Features</a></li>
            <li className="nav-item"><a className="nav-link" href="#categories">Categories</a></li>
            <li className="nav-item"><a className="nav-link" href="#favorites">Favorites</a></li>
            <li className="nav-item"><a className="nav-link" href="#submit-recipe">Submit</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="#login" data-toggle="modal" data-target="#loginModal">Login</a></li>
            <li className="nav-item"><a className="nav-link" href="#register" data-toggle="modal" data-target="#RegisterModal">Register</a></li>
          </ul>
          <form className="form-inline ml-3">
            <input className="form-control mr-sm-2" type="search" placeholder="Search recipes..." />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;