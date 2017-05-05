import React from 'react';
import PropTypes from 'prop-types';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';

class ContactFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    } // end this.state
    this.handleSubmit = this.handleSubmit.bind(this);
  } // end constructor

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }); // end setState
  } // end handleClearForm

  handleSubmit = (e) => {
    e.preventDefault();
    const formPayload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }
    console.log('Send this in a POST request:', formPayload)
    this.handleClearForm(e);
  }

  handleFirstNameChange = (e) => {
    this.setState({firstName: e.target.value});
  } // end handleFirstNameChange

  handleLastNameChange = (e) => {
    this.setState({lastName: e.target.value});
  } // end handleLastNameChange

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  } // end handleEmailChange

  handleSubjectChange = (e) => {
    this.setState({subject: e.target.value});
  } // end handleSubjectChange

  handleMessageChange = (e) => {
    this.setState({message: e.target.value});
  } // end handleMessageChange

  render() {

    return (
      <div className='container'>
        <div className='form-wrap'>

          <form className='form-label' onSubmit={this.handleSubmit}>
            <SingleInput
              id={'contactFirstName'}
              name={'firstName'}
              inputType={'text'}
              content={this.state.firstName}
              controlFunc={this.handleFirstNameChange}
              autoComplete={'off'}
              title={'First Name'}
            />
            <SingleInput
              id={'contactLastName'}
              name={'lastName'}
              inputType={'text'}
              content={this.state.lastName}
              controlFunc={this.handleLastNameChange}
              autoComplete={'off'}
              title={'Last Name'}
            />
            <SingleInput
              id={'contactEmail'}
              name={'email'}
              inputType={'text'}
              content={this.state.email}
              controlFunc={this.handleEmailChange}
              autoComplete={'off'}
              title={'Email Address'}
            />
            <SingleInput
              id={'contactSubject'}
              name={'subject'}
              inputType={'text'}
              content={this.state.subject}
              controlFunc={this.handleSubjectChange}
              autoComplete={'off'}
              title={'Subject'}
            />
            <TextArea
              id={'contactMessage'}
              name={'message'}
              content={this.state.message}
              rows={10}
              autoComplete={'off'}
              controlFunc={this.handleMessageChange}
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
