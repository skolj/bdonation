import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='white' role='navigation'>
      <div className='nav-wrapper container'>
        <Link id='logo-container' to='/' className='brand-logo'>
          BDonation
        </Link>
        <ul className='right hide-on-med-and-down'>
          <li>
            <a href='/auth/google'>Sign In With Google</a>
          </li>
        </ul>

        <ul id='nav-mobile' className='sidenav'>
          <li>
            <a href='/auth/google'>Sign In With Google</a>
          </li>
        </ul>
        <Link to='#' data-target='nav-mobile' className='sidenav-trigger'>
          <i className='material-icons'>menu</i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
