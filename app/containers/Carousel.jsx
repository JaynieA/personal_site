import React from 'react';
import PropTypes from 'prop-types';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import FaCircle from 'react-icons/fa/circle';
import {CSSTransitionGroup} from 'react-transition-group';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      max: null,
      transition: 'right-slide'
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
    this.setState({
      current: newImg,
      transition: 'right-slide'
    });
  } // end handleForwardClick
  handleBackwardClick = () => {
    let newImg;
    let min = 0;
    this.state.current === min
     ? newImg = this.state.max
     : newImg = this.state.current - 1
    this.setState({
      transition: 'left-slide',
      current: newImg
    }); // end setState
  } // end handleBackwardClick
  handleDotClick = (index) => {
    let transition;
    index >= this.state.current
      ? transition = 'right-slide'
      : transition = 'left-slide'
    this.setState({
      current: index,
      transition: transition
    }); // end setState
  } // end handleDotClick
  render() {

    const CarouselImage =
      <img
        key={this.state.current}
        className={'carousel-image'}
        src={this.props.images[this.state.current]}
        alt={'Image '+ (this.state.current + 1) + ' of ' + (this.state.max + 1)}
      />;

    return (
      <div>
        <div className={'carousel-image-container'}>
          <CSSTransitionGroup
            transitionName={this.state.transition}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {CarouselImage}
          </CSSTransitionGroup>
        </div>
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
