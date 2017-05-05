import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => (
  <ul className="nav">
    <li>
      <NavLink exact activeClassName="active" to="/">
        About
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/portfolio">
        Portfolio
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </li>
  </ul>
)

export default Nav;
