import React from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import api from '../utils/api';

const validate = (state) => {
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
      }, // end touched,
      submitted: false,
      alert: {
        type: 'default',
        text:'',
      },
      btnText: 'Send'
    }; // end this.state
  } // end constructor

  canBeSubmitted = () => {
    const errors = validate(this.state);
    const isEnabled = Object.keys(errors).some(x => errors[x]);
    //truthy if there are no errors
    return !isEnabled;
  } // end canBeSubmitted

  handleBlur = (key) => (e) => {
    this.setState({
      touched: { ...this.state.touched, [key]: true },
    }); // end setState
  } // end handleBlur

  handleConfirmation = () => {
    this.setState({
      submitted: true,
      btnText: 'Send',
      alert: {
        type: 'success',
        text: 'Thank you! Your message has been sent.',
      } // end alert
    }); // end setState
    setTimeout(() => {
      this.setState({submitted:false});
    }, 5000);  // wait 5 seconds, then reset to false
  } // end handleConfirmation

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

  handleFieldChange = (key) => (e) => {
    let newState = {};
    newState[key] = e.target.value;
    this.setState(newState);
  } // end handleFieldChange

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
      }, // end touched
      alert: {
        type: 'default',
        text:'',
      }
    }); // end setState
  } // end handleClearForm

  handleLoading = () => {
    const original = this.state.btnText;
    const stopper = this.state.btnText + '...';
    const speed = 300;
    this.interval = window.setInterval(() => {
      if (this.state.btnText === stopper ) {
        this.setState(() => {
          return {
            btnText: original
          } // end return
        }); // end setState
      } else if (this.state.btnText === original) {
        this.setState(() => {
          return {
            btnText: original + 'ing.'
          } // end return
        }); // end setState
      } else {
        this.setState((prevState) => {
          return {
            btnText: prevState.btnText + '.'
          } // end return
        }); // end setState
      } // end else
    }, speed); // end setInterval
  } // end handleLoading

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.canBeSubmitted()) {
      this.handleLoading();
      const formPayload = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      } // end formPayload
      api.postContactForm(formPayload)
      .then((response) => {
        console.log('form submission success-->', response);
        window.clearInterval(this.interval);
        this.handleResetForm();
        this.handleConfirmation();
      })
      .catch((err) => {
        //TODO: MAKE THIS FAIL GRACEFULLY - add alt action for repeated errors
        console.log('api.postContactForm error -->', err);
        window.clearInterval(this.interval);
        this.handleSubmissionError();
      }); // end api.postContactForm
    } // end if
  } // end handleSubmit

  handleSubmissionError = () => {
    this.setState({
      submitted: true,
      btnText: 'Send',
      alert: {
        type: 'error',
        text: 'Oops! There has been an error sending your email.',
      } // end alert
    }); // end setState
  } // end handleSubmissionError

  render() {
    const errors = validate(this.state);
    const submitted = this.state.submitted;
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    }; // end shouldMarkError

    return (
      <div className='container'>
        <Form
          onSubmit={this.handleSubmit}
          btnClassName={'button ' + (isDisabled ? 'disabled' : '')}
          btnControlFunc={isDisabled ? this.handleDisabledClick : null}
          btnText={this.state.btnText}
          submitted={submitted}
          alert={this.state.alert.text}
          alertType={this.state.alert.type}
        >
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
            className={shouldMarkError('message') ? 'error' : ''}
            onBlur={this.handleBlur('message')}
          />
        </Form>
      </div>
    ) // end return
  } // end render
} // end Contact

export default ContactFormContainer;
