import React from 'react';
import api from '../utils/api';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.match.params.value
    }; // end this.state
  } // end constructor
  componentDidMount() {
    api.fetchPortfolioItemData(this.state.value)
    .then((data) => {
      console.log('api.fetchPortfolioItemData response-->', data);
      this.setState(function() {
        return {
          data: data
        } // end return
      }); // end .then
    }); // end getContactInfo
  } // end componentDidMount
  render() {
    return (
      <div>
        {!this.state.data
           ? <p className='text-center'>Loading...</p>
           : <h1>{this.state.data.project_name}</h1>}
      </div>
    ) // end return
  } // end render
} // end PortfolioItem

export default PortfolioItem;
