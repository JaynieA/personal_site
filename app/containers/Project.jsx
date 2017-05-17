import React from 'react';
import api from '../utils/api';

import Loading from './Loading';

let styles = {
  img: {
    height: '500px',
    width: 'auto',
    display: 'block',
    margin: '0 auto'
  }
};

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.match.params.value
    }; // end this.state
  } // end constructor
  componentDidMount() {
    api.fetchProjectData(this.state.value)
    .then((data) => {
      console.log('api.fetchProjectData response-->', data);
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
        {!this.state.data &&
          <Loading/> }

        {this.state.data &&
          <div>
            <h1>{this.state.data.project_name}</h1>
            <img
              src={this.state.data.thumbnail}
              alt={'Image for ' + this.state.data.project_name}
              style={styles.img}
              />
            <p className={'text-center'}>{this.state.data.description}</p>
          </div>
        }

      </div>
    ) // end return
  } // end render
} // end Project

export default Project;
