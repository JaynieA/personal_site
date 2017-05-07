import React from 'react';
import {NavLink} from 'react-router-dom';
import ReactDOM from 'react-dom';

const collapseWidth = 768;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
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

  navigationLinks = () => {
    return (
      <ul className="nav">
        <li key={1} onClick={this.handleNavClick}>
          <NavLink exact activeClassName="active" to="/">
            About
          </NavLink>
        </li>
        <li key={2} onClick={this.handleNavClick}>
          <NavLink activeClassName="active" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li key={3} onClick={this.handleNavClick}>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    )
  } // end navigationLinks

  renderMobileNav = () => {
    if (this.state.mobileNavVisible) {
      return this.navigationLinks();
    } // end if
  } // end renderMobileNav

  handleNavClick = () => {
    !this.state.mobileNavVisible
      ? this.setState({mobileNavVisible: true})
      : this.setState({mobileNavVisible: false})
  } // end handleNavClick

  renderNavigation() {
    if(this.state.windowWidth <= collapseWidth) {
      return [
        <div key={9} className="mobile-nav">
          <div
            className={'mobile-nav-wrap'}
            onClick={this.handleNavClick}
          >
            <div className={`hamburger ${this.state.mobileNavVisible ? 'change' : ''}`}>
              <div className='bar1'></div>
              <div className='bar2'></div>
              <div className='bar3'></div>
            </div>
          </div>
          {this.renderMobileNav()}
        </div>
      ];
    } else {
      return [
        <div key={7} className="nav_menu">
          {this.navigationLinks()}
        </div>
      ];
    }
  }

  render() {
    return (
      <div>
        {this.renderNavigation()}
      </div>
    ) // end render
  } // end render
} // end Nav

export default Nav;
