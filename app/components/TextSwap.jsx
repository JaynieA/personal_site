import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';

class TextSwap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.list[0]
    }; // end setState
  } // end constructor

  componentDidMount() {
    const max = this.props.list.length - 1;
    let count = 1;
    this.interval = window.setInterval(() => {
      if (count <= max) {
        this.setState({text: this.props.list[count]});
      } else {
        this.setState({text: this.props.list[0]})
        count = 0;
      } // end else
      count ++;
    }, this.props.speed);
  } // end componentDidMount

  componentWillUnmount() {
    window.clearInterval(this.interval);
  } // end componentWillUnmount

  render() {
    return (
      <p className={`text-center ${this.props.className}`}>
        {this.state.text}
      </p>
    ) // end return
  } // end render
} // end TextSwap

TextSwap.propTypes = {
  list: PropTypes.array.isRequired,
  speed: PropTypes.number.isRequired,
  className: PropTypes.string
}; // end propTypes

TextSwap.defaultProps = {
  list: ['one', 'two', 'three'],
  speed: 1200
}; // end defaultProps

export default TextSwap;
