import axios from 'axios';

let api = {
  fetchContactInfo: function () {
    return axios.get('/api/contact')
    .then(function(response) {
      console.log('api.fetchContactInfo results-->', response.data.results);
      return response.data.results;
    });
  },
  fetchPortfolioInfo: function() {
    return axios.get('/api/portfolio')
    .then(function(response) {
      return response.data.results;
    });
  },
  postContactForm: function(formPayload) {
    return axios.post('/api/email', formPayload)
    .then(function(response) {
      return response.data;
    });
  }
};

export default api;
