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
        name: 'Spot\'s Last Stop Canine Rescue',
        src: require('../assets/SLS.png'),
        url: 'spots-last-stop'
      },
      {
        name: 'Donation Manager',
        src: require('../assets/donation-manager.png'),
        url: 'donation-manager'
      },
      {
        name: 'Eagle Reserve',
        src: require('../assets/eagle-reserve.png'),
        url: 'eagle-reserve'
      },
      {
        name: 'Comstar eBay Store',
        src: require('../assets/comstar-ebay.png'),
        url: 'comstar-ebay'
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
