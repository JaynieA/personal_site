import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <ul className="nav">
      <li key={1} onClick={props.onClick}>
        <NavLink exact activeClassName="active" to="/">
          About
        </NavLink>
      </li>
      <li key={2} onClick={props.onClick}>
        <NavLink activeClassName="active" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li key={3} onClick={props.onClick}>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  )
}

NavLinks.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NavLinks;
