import React from 'react';
import PropTypes from 'prop-types';

import NavLinks from './NavLinks';

const MobileNav = (props) => {
  return (
    <div key={9} className="mobile-nav">
      <div
        className={'mobile-nav-wrap'}
        onClick={props.controlFunc}
      >
        <div className={`hamburger ${props.isVisible ? 'change' : ''}`}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
      </div>
       {props.isOpen &&
         <NavLinks onClick={props.controlFunc}/>
       }
    </div>
  )
}

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  controlFunc: PropTypes.func.isRequired
}

export default MobileNav;
