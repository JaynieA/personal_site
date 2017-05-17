import React from 'react';
import api from '../utils/api';

import PortfolioGrid from '../components/PortfolioGrid';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      projects: null
    }; // end this.state
  } // end constructor
  componentDidMount() {
    api.fetchPortfolioInfo()
    .then((data) => {
      // console.log('api.fetchPortfolioInfo data-->', data);
      this.setState(function() {
        return {
          projects: data
        } // end return
      }); // end .then
    }); // end getContactInfo
  } // end componentDidMount
  render() {

    console.log(this.state.projects);
    return (
      <div className='container'>
        <h1>Portfolio</h1>
        {!this.state.projects
           ? <p className='text-center'>Loading...</p>
           : <PortfolioGrid projects={this.state.projects}/>}
      </div>
    ) // end return
  } // end render
} // end Portfolio

export default Portfolio;
