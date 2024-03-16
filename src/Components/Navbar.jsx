import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar fixed top-0 navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="#">DigiNews</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/general">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
