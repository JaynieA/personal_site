import React from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/nav/Nav';
import NavLinks from '../components/nav/NavLinks';
import MobileNav from '../components/nav/MobileNav';

class NavContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavOpen: false
    } // end this.state
  } // end constructor

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  } // end handleResize

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
  } // end componentDidMount

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  } // end componentWillUnmount

  handleNavClick = () => {
    !this.state.mobileNavOpen
      ? this.setState({mobileNavOpen: true})
      : this.setState({mobileNavOpen: false})
  } // end handleNavClick

  render() {
    const collapseWidth = 768;
    const displayMobileNav = this.state.windowWidth <= collapseWidth;
    const mobileInfo = {
      isVisible: displayMobileNav,
      isOpen: this.state.mobileNavOpen
    }
    return (
      <Nav
        controlFunc={this.handleNavClick}
        mobile={mobileInfo}
      />
    ) // end render
  } // end render
} // end Nav

export default NavContainer;
