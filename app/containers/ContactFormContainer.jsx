import React from 'react';
import PropTypes from 'prop-types';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import api from '../utils/api';

const validate = (state) => {
  console.log('in validate-->',state);
  return {
    firstName: state.firstName.length === 0,
    lastName: state.lastName.length === 0,
    email: state.email.length === 0,
    subject: state.subject.length === 0,
    message: state.message.length === 0
  }; // end return
} // end validate

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
      } // end touched
    }; // end this.state
  } // end constructor

  handleResetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      submitted: false,
      touched: {
        firstName: false,
        lastName: false,
        email: false,
        subject: false,
        message: false
      } // end touched
    }); // end setState
  } // end handleClearForm

  handleConfirmation = () => {
    console.log('in handleConfirmation');
    this.setState({
      submitted: true
    }); // end setState
    setTimeout(() => {
      this.setState({submitted:false});
    }, 5000);  // wait 5 seconds, then reset to false
  } // end handleConfirmation

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.canBeSubmitted()) {
      console.log('form can be submitted');
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
        this.handleResetForm();
        this.handleConfirmation();
      })
      .catch((err) => {
        //TODO: MAKE THIS FAIL GRACEFULLY
        console.log('api.postContactForm error -->', err);
      }); // end api.postContactForm
    } else {
      //TODO: MAKE THIS FAIL GRACEFULLY
      console.log('cant be submitted');
    } // end else
  } // end handleSubmit

  handleFieldChange = (key) => (e) => {
    let newState = {};
    newState[key] = e.target.value;
    this.setState(newState);
  } // end handleFieldChange

  handleBlur = (key) => (e) => {
    this.setState({
      touched: { ...this.state.touched, [key]: true },
    }); // end setState
  } // end handleBlur

  canBeSubmitted = () => {
    const errors = validate(this.state);
    const isEnabled = Object.keys(errors).some(x => errors[x]);
    console.log('in canBeSubmitted--> ERRORS, ', errors, 'ISENABLED-->', isEnabled);
    //truthy if there are no errors
    return !isEnabled;
  } // end canBeSubmitted

  handleDisabledClick = (e) => {
    this.setState({
      touched: {
        firstName: true,
        lastName: true,
        email: true,
        subject: true,
        message: true
      } // end touched
    }); // end setState
  } // end handleDisabledClick

  render() {
    const errors = validate(this.state);
    console.log('errors in render-->', errors);
    const submitted = this.state.submitted;
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    console.log('isDisabled in render-->', isDisabled);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    }; // end shouldMarkError

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
              className={'button ' + (isDisabled ? 'disabled' : '')}
              onClick={isDisabled ? this.handleDisabledClick : null}
              >
              Send
            </button>

            {submitted === true &&
            <pre>Form successfully submitted</pre>}

          </form>
        </div>
      </div>
    ) // end return
  } // end render
} // end Contact

export default ContactFormContainer;
