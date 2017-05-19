import React from 'react';
import api from '../utils/api';

import Loading from './Loading';
import Carousel from './Carousel';

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
            <Carousel images={this.state.data.img_urls}/>
            <p className={'text-center'}>Role: {this.state.data.role}</p>
            <p className={'text-center'}>Description: {this.state.data.description}</p>
            <p className={'text-center'}>Technologies Used: {this.state.data.technologies}</p>
          </div>
        }
      </div>
    ) // end return
  } // end render
} // end Project

export default Project;
