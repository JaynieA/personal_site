import axios from 'axios';

let api = {
  fetchContactInfo: function () {
    return axios.get('/api/contact')
    .then(function(response) {
      console.log('contact results-->', response.data.results);
      return response.data.results;
    });
  }
};

export default api;
