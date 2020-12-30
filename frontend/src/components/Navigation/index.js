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
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div>

      <ul className='nav-container'>
      <h1>Uncorked</h1>
        <li>
          <NavLink exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
          <NavLink to="/wineries">Find a Winery</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </div>

  );
}

export default Navigation;
