import React from 'react';
import PropTypes from 'prop-types';
import NavLinks from './NavLinks';

import MobileNav from './MobileNav';

const Nav = (props) => {
  return (
    <div>

      {props.mobile.isVisible &&
      <MobileNav
        controlFunc={props.controlFunc}
        isOpen={props.mobile.isOpen}>
      </MobileNav>}

      {!props.mobile.isVisible &&
      <div key={7} className="full-nav">
        <NavLinks onClick={props.controlFunc}/>
      </div>}

    </div>
  )
}

Nav.PropTypes = {
  controlFunc: PropTypes.func.isRequired,
  mobile: PropTypes.shape({
    isVisible: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired
  })
}

export default Nav;
