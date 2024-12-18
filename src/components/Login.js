import React, { useState } from 'react';

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Here, you can add logic to authenticate the user (e.g., API call)
    console.log('Logging in with', { email, password });

    // Reset error if login is successful
    setError('');
  };

  
  // Don't render the modal if it's not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Login</h5>
            {/* Close button */}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose} // Call parent's close handler
            ></button>
            {/* Custom close button */}
            <button
              type="button"
              className="btn-close ms-2"
              aria-label="Close"
              style={{ position: 'absolute', top: '10px', right: 'px', fontSize: '1.5rem' }}
              onClick={onClose} // Call parent's close handler
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;