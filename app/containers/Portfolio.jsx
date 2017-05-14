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
        src: require('../assets/SLS.png')
      },
      {
        name: 'Donation Manager',
        src: require('../assets/donation-manager.png')
      },
      {
        name: 'Eagle Reserve',
        src: require('../assets/eagle-reserve.png')
      },
      {
        name: 'Comstar eBay Store',
        src: require('../assets/comstar-ebay.png')
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
