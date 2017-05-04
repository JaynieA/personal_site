import React from 'react';
import axios from 'axios';
import api from '../utils/api';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      city: null,
      state: null,
      state_abbr: null
    } // end this.state

    this.handleSubmit = this.handleSubmit.bind(this);
  } // end constructor

  handleSubmit() {

  }

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

    //TODO: move this logic to about?
    // <p>{this.state.name}</p>
    // <p><a href={'mailto:' + this.state.email}>{this.state.email}</a></p>
    // <p>{this.state.city}, {this.state.state_abbr}</p>


    return (
      <div className='container'>

        <form className='contact-form' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='f_name'>Name:</label>
            <input
              id='email_f_name'
              type='text'
              placeholder='First Name'
            />
            <input
              id='email_l_name'
              type='text'
              placeholder='Last Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='subject'>Subject:</label>
            <input
              id='subject_line'
              type='text'
              placeholder='Subject'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email_return_address'>Email:</label>
            <input
              id='email_return_address'
              type='text'
              placeholder='Email address'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email_message'>Message:</label>
            <textarea
              id='email_message'
              rows='10'
            />
          </div>
          <button
            type='submit'
            className='button'
            disabled={!this.state.email_address}>
            Send
          </button>
        </form>
      </div>
    ) // end return
  } // end render
} // end Contact

export default Contact;
