import React from 'react';
import './Navbar.css';
import { NavLink, Route, RouteComponentProps } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body">
        <div className="container-fluid">

          <div className="d-flex justify-content-start">

            <NavLink to={'/'} className='navbar-brand'>
              Home
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">

                  <NavLink to={'/credentials'} className='nav-link active'>
                    Card
                  </NavLink>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item ms">
                  {/* <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Login</a> */}
                  <NavLink to={'/login'} className='nav-link'>
                    Login
                  </NavLink>
                </li>
              </ul>
              
              <NavLink to={'/signup'} className='btn bg-danger' type="button" >
                    Sign Up
              </NavLink>
              

              {/* <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </div>




          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar;
