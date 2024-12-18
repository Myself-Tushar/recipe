import React, { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Pass the search query to the parent component
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand font-bold text-2xl" href="https://youtube.com/@tech-tsr?si=XWHQlFHDwo2cFZd2">
            Tech TSR
          </a>
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
              <li className="nav-item"><a className="nav-link" href="#register" data-toggle="modal" data-target="#registerModal">Register</a></li>
            </ul>
            <form className="form-inline ml-3">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={handleSearchChange} // Handle change
              />
            </form>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Add your login form here */}
              <form>
                <div className="form-group">
                  <label htmlFor="loginEmail">Email address</label>
                  <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword">Password</label>
                  <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">Register</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* Add your registration form here */}
              <form>
                <div className="form-group">
                  <label htmlFor="registerEmail">Email address</label>
                  <input type="email" className="form-control" id="registerEmail" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="registerPassword">Password</label>
                  <input type="password" className="form-control" id="registerPassword" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="registerConfirmPassword">Confirm Password</label>
                  <input type="password" className="form-control" id="registerConfirmPassword" placeholder="Confirm password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;