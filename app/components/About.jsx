import React from 'react';
import axios from 'axios';
import api from '../utils/api';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      city: null,
      state: null,
      state_abbr: null
    } // end this.state
  } // end constructor

  componentDidMount() {
    api.fetchContactInfo()
    .then(function(data) {
      this.setState(function() {
        return {
          name: data.f_name + ' ' + data.l_name,
          email: data.email,
          city: data.city,
          state: data.state,
          state_abbr: data.state_abbr
        } // end return
      }); // end .then
    }.bind(this)); // end getContactInfo
  } // end componentDidMount

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p><a href={'mailto:' + this.state.email}>{this.state.email}</a></p>
        <p>{this.state.city}, {this.state.state_abbr}</p>
      </div>
    ) // end return
  } // end render
} // end About

export default About;
