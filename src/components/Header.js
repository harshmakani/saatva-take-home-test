import React from 'react';
import logo from '../logo.svg';

/**
 * Static Header component
 */
const Header = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="100"
            className="d-inline-block align-top"
            alt="Saatva"
          />
        </a>
      </div>
    </nav>
  );
};
export default Header;
