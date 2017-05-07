import React from 'react';
import ContactFormContainer from '../containers/ContactFormContainer';

const Contact = (props) => (
  <div className='container'>
    <h1>Contact me today to...</h1>
    <p className='text-center'>['say hello', 'discuss a project', 'brighten my day', 'ask a question', 'get a quote']</p>
    <ContactFormContainer/>
  </div>
)

export default Contact;
