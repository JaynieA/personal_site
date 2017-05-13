import React from 'react';

import PortfolioGrid from '../components/PortfolioGrid';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    };
  }
  render() {
    const projects = [
      {
        name: 'Spot\'s Last Stop',
        src: require('../assets/SLS.jpg')
      },
      {
        name: 'Donation Manager',
        src: require('../assets/donation-manager.jpg')
      },
      {
        name: 'Eagle Reserve',
        src: require('../assets/eagle-reserve.jpg')
      },
      {
        name: 'Comstar eBay Store',
        src: require('../assets/comstar-ebay.jpg')
      }
    ];
    return (
      <div className='container'>
        <h1>Portfolio</h1>
        <PortfolioGrid projects={projects}/>
      </div>
    )
  }
}

export default Portfolio;
