import React from 'react';

import TextSwap from './TextSwap';
import ContactFormContainer from '../containers/ContactFormContainer';

const reasons = ['say hello', 'discuss a project', 'ask a question', 'brighten my day', 'inquire about pricing', 'get in touch' ];

const Contact = (props) => (
  <div className='container'>
    <h1>Contact me today to...</h1>
    <TextSwap list={reasons}/>
    <ContactFormContainer/>
  </div>
)

export default Contact;
