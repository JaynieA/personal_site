import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }

    //NOTE: not necessary with .bind(this, propertyName) in onChange
    //this.handleChangeFor = this.handleChangeFor.bind(this);

    //this.handleSubmit = this.handleSubmit.bind(this);

  } // end constructor

  handleChangeFor(id, e) {
    let newState = {};
    newState[id] = e.target.value;
    console.log(newState[id]);
    this.setState(newState);
  }

  // handleSubmit(e) {
  //   console.log('handle submit this-->',this);
  //   e.preventDefault();
  //   this.props.onSubmit(
  //     this.state.firstName,
  //     this.state.lastName,
  //     this.state.email,
  //     this.state.subject,
  //     this.state.message
  //   );
  // }

  render() {

    //TODO: move this to form after figuring out onChange
    // onSubmit={this.handleSubmit}

    return (
      <div className='container'>
        <div className='form-wrap'>

          <form className='form-label' >
            <fieldset>
              <input
                id='email_f_name'
                type='text'
                value={this.state.firstName}
                autoComplete="off"
                onChange={this.handleChangeFor.bind(this,'firstName')}
                required
              />
            <label htmlFor='email_f_name'>First Name</label>
            </fieldset>
            <fieldset>
              <input
                id='email_l_name'
                type='text'
                value={this.state.lastName}
                autoComplete="off"
                onChange={this.handleChangeFor.bind(this, 'lastName')}
                required
              />
            <label htmlFor='email_l_name'>Last Name</label>
            </fieldset>
            <fieldset>
              <input
                id='email_return_address'
                type='text'
                value={this.state.email}
                autoComplete="off"
                onChange={this.handleChangeFor.bind(this, 'email')}
                required
              />
            <label htmlFor='email_return_address'>Email Address</label>
            </fieldset>
            <fieldset>
              <input
                id='email_subject_line'
                type='text'
                value={this.state.subject}
                autoComplete="off"
                onChange={this.handleChangeFor.bind(this, 'subject')}
                required
              />
            <label htmlFor='email_subject_line'>Subject</label>
            </fieldset>
            <fieldset>
              <textarea
                id='email_message'
                value={this.state.message}
                rows='10'
                autoComplete="off"
                onChange={this.handleChangeFor.bind(this, 'message')}
                required
              />
              <label htmlFor='email_message'>Message</label>
            </fieldset>
            <button
              type='submit'
              className='button'
              disabled={!this.state.firstName &&
                        !this.state.lastName &&
                        !this.state.email &&
                        !this.state.subject &&
                        !this.state.message }>
              Send
            </button>
          </form>
        </div>
      </div>
    ) // end return
  } // end render
} // end Contact

Contact.propTypes = {
  //onSubmit: PropTypes.func.isRequired
}

export default Contact;
