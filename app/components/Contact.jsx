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
        <div className='form-wrap'>
          <form className='form-label' onSubmit={this.handleSubmit}>
            <fieldset>
              <input
                id='email_f_name'
                type='text'
                autocomplete="off"
                required
              />
            <label htmlFor='email_f_name'>First Name</label>
            </fieldset>
            <fieldset>
              <input
                id='email_l_name'
                type='text'
                autocomplete="off"
                required
              />
            <label htmlFor='email_l_name'>Last Name</label>
            </fieldset>

            <fieldset>
              <input
                id='email_return_address'
                type='text'
                autocomplete="off"
                required
              />
            <label htmlFor='email_return_address'>Email Address</label>
            </fieldset>
            <fieldset>
              <input
                id='email_subject_line'
                type='text'
                autocomplete="off"
                required
              />
            <label htmlFor='email_subject_line'>Subject</label>
            </fieldset>
            <fieldset>
              <textarea
                id='email_message'
                rows='10'
                autocomplete="off"
                required
              />
              <label htmlFor='email_message'>Message</label>
            </fieldset>
            <button
              type='submit'
              className='button'
              disabled={!this.state.email_address}>
              Send
            </button>
          </form>
        </div>
      </div>
    ) // end return
  } // end render
} // end Contact

export default Contact;
