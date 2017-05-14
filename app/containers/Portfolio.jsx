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
    const projects = [
      {
        key: 1,
        name: 'Spot\'s Last Stop Canine Rescue',
        src: require('../assets/SLS.png'),
        url: 'spots-last-stop'
      },
      {
        key: 2,
        name: 'Donation Manager',
        src: require('../assets/donation-manager.png'),
        url: 'donation-manager'
      },
      {
        key: 3,
        name: 'Eagle Reserve',
        src: require('../assets/eagle-reserve.png'),
        url: 'eagle-reserve'
      },
      {
        key: 4,
        name: 'Comstar eBay Store',
        src: require('../assets/comstar-ebay.png'),
        url: 'comstar-ebay'
      }
    ];
    console.log('state.projects-->', this.state.projects);
    return (
      <div className='container'>
        <h1>Portfolio</h1>
        {!this.state.projects
           ? <p>Loading</p>
           : <PortfolioGrid projects={projects}/>}
      </div>
    ) // end return
  } // end render
} // end Portfolio

export default Portfolio;
