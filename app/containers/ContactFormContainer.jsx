import React from 'react';
import PropTypes from 'prop-types';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import api from '../utils/api';

function validate(firstName, lastName, email, subject, message) {
  // true means invalid, so our conditions got reversed
  return {
    firstName: firstName.length === 0,
    lastName: lastName.length === 0,
    email: email.length === 0,
    subject: subject.length === 0,
    message: message.length === 0
  };
}

class ContactFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      touched: {
        firstName: false,
        lastName: false,
        email: false,
        subject: false,
        message: false
      }
    }; // end this.state
  } // end constructor

  handleClearForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      submitted: false,
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
    if (!this.canBeSubmitted()) {
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
    } else {
      console.log('cant be submitted');
    }
  } // end handleSubmit

  handleFieldChange = (key) => (e) => {
    let newState = {};
    newState[key] = e.target.value;
    this.setState(newState);
  } // end handleFieldChange

  handleBlur = (key) => (e) => {
    console.log('handling blur-->', this.state.touched);
    this.setState({
      touched: { ...this.state.touched, [key]: true },
    }); // end setState
  } // end handleBlur

  canBeSubmitted = () => {
    const errors = validate(this.state.firstName, this.state.lastName, this.state.email, this.state.subject, this.state.message);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.firstName, this.state.lastName, this.state.email, this.state.subject, this.state.message);
    console.log('ERRORS-->',errors);
    let submitted = this.state.submitted;
    let isEnabled = this.state.firstName &&
                    this.state.lastName &&
                    this.state.email &&
                    this.state.subject &&
                    this.state.message;

    const shouldMarkError = (field) => {

      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      let shouldWe = hasError ? shouldShow : false
      console.log('should we mark ' + field + ' as error?: ' + shouldWe);
      return hasError ? shouldShow : false;
    };

    return (
      <div className='container'>
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
              className={shouldMarkError('firstName') ? 'error' : ''}
              onBlur={this.handleBlur('firstName')}
            />
            <SingleInput
              id={'contactLastName'}
              name={'lastName'}
              inputType={'text'}
              content={this.state.lastName}
              controlFunc={this.handleFieldChange('lastName')}
              autoComplete={'off'}
              title={'Last Name'}
              className={shouldMarkError('lastName') ? 'error' : ''}
              onBlur={this.handleBlur('lastName')}
            />
            <SingleInput
              id={'contactEmail'}
              name={'email'}
              inputType={'text'}
              content={this.state.email}
              controlFunc={this.handleFieldChange('email')}
              autoComplete={'off'}
              title={'Email Address'}
              className={shouldMarkError('email') ? 'error' : ''}
              onBlur={this.handleBlur('email')}
            />
            <SingleInput
              id={'contactSubject'}
              name={'subject'}
              inputType={'text'}
              content={this.state.subject}
              controlFunc={this.handleFieldChange('subject')}
              autoComplete={'off'}
              title={'Subject'}
              className={shouldMarkError('subject') ? 'error' : ''}
              onBlur={this.handleBlur('subject')}
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
              className={shouldMarkError('message') ? 'error' : 'NOPE'}
              onBlur={this.handleBlur('message')}
            />
            <button
              type='submit'
              className='button'
              disabled={!isEnabled}>
              Send
            </button>
            {submitted === true &&
            <pre>Form successfully submitted</pre>
            }
          </form>
        </div>
      </div>
    ) // end return
  } // end render
} // end Contact

export default ContactFormContainer;
