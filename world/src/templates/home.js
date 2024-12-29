import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <div>
      {/* Super Navigation Bar */}
      <div className="superNav border-bottom py-2 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <select className="me-3 border-0 bg-light">
                <option value="en-us">EN-US</option>
              </select>
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                <strong>info@somedomain.com</strong>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-phone me-1 text-warning"></i>
                <strong>1-800-123-1234</strong>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
              <span className="me-3">
                <i className="fa-solid fa-truck text-muted me-1"></i>
                <a className="text-muted" href="#">Shipping</a>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-file text-muted me-2"></i>
                <a className="text-muted" href="#">Policy</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-shop me-2"></i>
            <strong>GEAR SHOP</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Mobile Search Bar */}
          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input type="text" className="form-control border-warning" style={{ color: '#7a7a7a' }} />
              <button className="btn btn-warning text-white">Search</button>
            </div>
          </div>

          {/* Collapsible Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            {/* Desktop Search Bar */}
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                <span className="border-warning input-group-text bg-warning text-white">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" className="form-control border-warning" style={{ color: '#7a7a7a' }} />
                <button className="btn btn-warning text-white">Search</button>
              </div>
            </div>

            {/* Navigation Links */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">
                  Offers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  About
                </a>
              </li>
            </ul>

            {/* Cart and Account Links */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <i className="fa-solid fa-cart-shopping me-1"></i> Cart
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#">
                  <i className="fa-solid fa-circle-user me-1"></i> Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero-section text-white d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-4">LET'S EXPLORE UNIQUE CLOTHES</h1>
          <p className="lead">Explore the latest fashion trends and accessories.</p>
          <button className="btn btn-warning btn-lg mt-3">
          SHOP NOW  <i className="fa-solid fa-arrow-right me-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
