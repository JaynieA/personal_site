import React from 'react';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.match.params.value
    };
  }
  render() {
    return (
      <h1>{this.state.value}</h1>
    )
  }
}

export default PortfolioItem;
