import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='nav-link button' to="/login">Log In</NavLink>
        <NavLink className='nav-link button'  to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="nav-bar">
      <NavLink className="header nav-link" exact to="/">Uncorkd</NavLink>
      <div className='nav-container'>
          {isLoaded && sessionLinks}
          {/* <NavLink to="/wineries">Find a Winery</NavLink>
          <NavLink to="/profile">Profile</NavLink> */}
      </div>
    </div>

  );
}

export default Navigation;
