import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

class NavLinks extends React.Component {
  constructor(props) {
    super(props);
  } // end constructor
  render() {
    return (
      <ul className="nav">
        <li key={1} onClick={this.props.onClick}>
          <NavLink exact activeClassName="active" to="/">
            About
          </NavLink>
        </li>
        <li key={2} onClick={this.props.onClick}>
          <NavLink activeClassName="active" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li key={3} onClick={this.props.onClick}>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    )
  }
}

NavLinks.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default NavLinks;
