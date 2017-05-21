import React from 'react';
import PropTypes from 'prop-types';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import FaCircle from 'react-icons/fa/circle';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      max: null
    } // end this.state
  } // end constructor
  componentDidMount() {
    this.setState(()=>{
      const max = this.props.images.length - 1;
      return {
        current: 0,
        max: max
      } // end return
    }) // end setState
  } // end componentDidMount
  handleForwardClick = () => {
    let newImg;
    this.state.current < this.state.max
     ? newImg = this.state.current + 1
     : newImg = 0
    this.setState({current: newImg});
  } // end handleForwardClick
  handleBackwardClick = () => {
    let newImg;
    let min = 0;
    this.state.current === min
     ? newImg = this.state.max
     : newImg = this.state.current - 1
    this.setState({current: newImg});
  } // end handleBackwardClick
  handleDotClick = (index) => {
    this.setState({
      current: index
    })
  } // end handleDotClick
  render() {
    return (
      <div>
        <img
          className={'carousel-image'}
          src={this.props.images[this.state.current]}
          alt={'Image '+ (this.state.current + 1) + ' of ' + (this.state.max + 1)}
        />
        <FaAngleDoubleLeft
          onClick={this.handleBackwardClick}
          className={'carousel-button back'}
        />
       <FaAngleDoubleRight
          onClick={this.handleForwardClick}
          className={'carousel-button fwd'}
        />
       <div className={'dot-wrap'}>
          {this.props.images.map((image, index) => {
            const className = this.state.current === index ? 'dot active' : 'dot';
            return (
              <FaCircle
                key={index}
                onClick={() => this.handleDotClick(index)}
                className={className}
                />
            )
          })}
        </div>
      </div>
    ) // end return
  } // end render
} // end Carousel

Carousel.propTypes = {
    images: PropTypes.array.isRequired
};

export default Carousel;
