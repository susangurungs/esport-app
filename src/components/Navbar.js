import React from 'react';
import PropTypes from 'prop-types';
// import { a } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active" aria-current="page" href="/home">{props.Home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/a">a</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-a dropdown-toggle" href="/drop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/action">Action</a></li>
                <li><a className="dropdown-item" href="/another">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/some">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-a disabled" aria-disabled="true" href="/disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="form-check form-switch ms-3">
            <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="switchCheckDefault" />
            <label className="form-check-label" htmlFor="switchCheckDefault">Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  a: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Set Title Here',
  a: 'Set a Here',
};
