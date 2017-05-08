import React from 'react';
import axios from 'axios';
import api from '../utils/api';

import TextSwap from './TextSwap';

const titles = ['full stack web developer', 'software engineer', 'lifelong learner', 'programmer', 'innovator'];

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      city: null,
      state: null,
      state_abbr: null
    } // end this.state
  } // end constructor

  componentDidMount() {
    api.fetchContactInfo()
    .then(function(data) {
      this.setState(function() {
        return {
          name: data.f_name + ' ' + data.l_name,
          email: data.email,
          city: data.city,
          state: data.state,
          state_abbr: data.state_abbr
        } // end return
      }); // end .then
    }.bind(this)); // end getContactInfo
  } // end componentDidMount

  render() {
    return (
      <div className='container'>
        <h1>hi! I'm Jaynie, a <br/>
          <TextSwap list={titles} speed={2000}/>
          from {this.state.city}, {this.state.state_abbr}.
        </h1>

        <div className={'copy-wrap'}>
          <p>With every line of code, I strive to make the web a better looking place...Jelly soufflé macaroon chupa chups tart sesame snaps. Bear claw cheesecake candy canes oat cake ice cream donut bonbon. Dragée carrot cake fruitcake cheesecake cookie. Cookie bonbon cake dessert jelly-o cake. Sweet roll cake ice cream. Marshmallow donut chocolate tart pie dragée powder pudding. Sweet dessert cookie gummies lemon drops caramels donut macaroon powder. </p>
          <p>Soufflé caramels lemon drops gummies tiramisu candy canes biscuit bear claw. Cake chocolate bar candy ice cream pie lemon drops. Cake wafer halvah jelly beans liquorice jujubes sugar plum. Pie pastry fruitcake cotton candy. Soufflé candy sweet sesame snaps sweet roll apple pie sesame snaps.</p>
        </div>

      </div>
    ) // end return
  } // end render
} // end About

// <p>{this.state.name}</p>
// <p><a href={'mailto:' + this.state.email}>{this.state.email}</a></p>
// <p>{this.state.city}, {this.state.state_abbr}</p>


export default About;
