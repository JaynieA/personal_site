import React from 'react';
import axios from 'axios';

function getContactInfo() {
  return axios.get('/api/contact')
  .then(function(response) {
    console.log('contact results-->', response.data.results);
    return response.data.results;
  });
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <p>CONTACT</p>
        <button onClick={getContactInfo}>
          get contact info
        </button>
      </div>
    )
  }
}

export default Contact;
