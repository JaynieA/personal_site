import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';

import NavLinks from './NavLinks';

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
} // end FirstChild

const MobileNav = (props) => {
  return (
    <div key={9} className="mobile-nav">
      <div
        className={'mobile-nav-wrap'}
        onClick={props.controlFunc}
      >
        <div className={`hamburger ${props.isOpen ? 'change' : ''}`}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
      </div>
      <CSSTransitionGroup
        transitionName="slide"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        component={FirstChild}>
       {props.isOpen &&
         <NavLinks onClick={props.controlFunc}/>
       }
       </CSSTransitionGroup>
    </div>
  )
}

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  controlFunc: PropTypes.func.isRequired
}

export default MobileNav;
