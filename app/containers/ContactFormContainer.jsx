import React from 'react';
import PropTypes from 'prop-types';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import api from '../utils/api';

class ContactFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }; // end this.state
  } // end constructor

  handleClearForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      submitted: false
    }); // end setState
  } // end handleClearForm

  handleConfirmation = () => {
    this.setState({
      submitted: true
    }); // end setState
    setTimeout(() => {
      this.setState({submitted:false});
    }, 5000);  // wait 5 seconds, then reset to false
  } // end handleConfirmation

  handleSubmit = (e) => {
    e.preventDefault();
    const formPayload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    } // end formPayload
    console.log('Send this in a POST request:', formPayload)
    api.postContactForm(formPayload)
    .then((response) => {
      console.log('form submission success-->', response);
      this.handleClearForm();
      this.handleConfirmation();
    })
    .catch((err) => {
      //TODO: MAKE THIS FAIL GRACEFULLY
      console.log('api.postContactForm error -->', err);
    }); // end api.postContactForm
  } // end handleSubmit

  handleFieldChange = (key) => (e) => {
    var state = {};
    state[key] = e.target.value;
    console.log(state);
    this.setState(state);
  } // end handleFieldChange

  render() {

    let submitted = this.state.submitted;

    return (
      <div className='container'>

        {submitted === true &&
        <pre>Form successfully submitted</pre>
        }

        <div className='form-wrap'>
          <form className='form-label' onSubmit={this.handleSubmit}>
            <SingleInput
              id={'contactFirstName'}
              name={'firstName'}
              inputType={'text'}
              content={this.state.firstName}
              controlFunc={this.handleFieldChange('firstName')}
              autoComplete={'off'}
              title={'First Name'}
            />
            <SingleInput
              id={'contactLastName'}
              name={'lastName'}
              inputType={'text'}
              content={this.state.lastName}
              controlFunc={this.handleFieldChange('lastName')}
              autoComplete={'off'}
              title={'Last Name'}
            />
            <SingleInput
              id={'contactEmail'}
              name={'email'}
              inputType={'text'}
              content={this.state.email}
              controlFunc={this.handleFieldChange('email')}
              autoComplete={'off'}
              title={'Email Address'}
            />
            <SingleInput
              id={'contactSubject'}
              name={'subject'}
              inputType={'text'}
              content={this.state.subject}
              controlFunc={this.handleFieldChange('subject')}
              autoComplete={'off'}
              title={'Subject'}
            />
            <TextArea
              id={'contactMessage'}
              name={'message'}
              content={this.state.message}
              rows={10}
              autoComplete={'off'}
              controlFunc={this.handleFieldChange('message')}
              resize={true}
              title={'Message'}
            />
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

export default ContactFormContainer;
