import React from 'react';
import PropTypes from 'prop-types';
import SingleInput from './SingleInput';
import TextArea from './TextArea';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    } // end this.state
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  } // end constructor

  handleChangeFor(id, e) {
    let newState = {};
    newState[id] = e.target.value;
    console.log(newState[id]);
    this.setState(newState);
  }

  handleFirstNameChange(e) {
    this.setState({firstName: e.target.value})
    console.log(this.state.firstName);
  }

  handleLastNameChange(e) {
    this.setState({lastName: e.target.value})
    console.log(this.state.lastName);
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
    console.log(this.state.email);
  }

  handleSubjectChange(e) {
    this.setState({subject: e.target.value});
    console.log(this.state.subject);
  }

  handleMessageChange(e) {
    this.setState({message: e.target.value});
    console.log(this.state.message);
  }

  render() {

    return (
      <div className='container'>
        <div className='form-wrap'>

          <form className='form-label'>
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

export default Contact;
