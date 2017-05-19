import React from 'react';
import PropTypes from 'prop-types';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';
import FaCircle from 'react-icons/fa/circle';

const styles = {
  img: {
    height: '400px',
    width: 'auto',
    display: 'block',
    margin: '0 auto'
  },
  fwd: {
    float: 'right',
    width: '50%',
    display: 'inline',
    textAlign: 'right',
    cursor: 'pointer'
  },
  back: {
    float: 'left',
    width: '50%',
    display: 'inline',
    cursor: 'pointer'
  },
  faBtn: {
    color: 'grey',
    margin: '5px'
  }
}; // end styles

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
    console.log('handleForwardClick');
    let newImg;
    this.state.current < this.state.max
     ? newImg = this.state.current + 1
     : newImg = 0
    this.setState({current: newImg});
  } // end handleForwardClick
  handleBackwardClick = () => {
    console.log('in handleBackwardClick');
    let newImg;
    let min = 0;
    this.state.current === min
     ? newImg = this.state.max
     : newImg = this.state.current - 1
    this.setState({current: newImg});
  } // end handleBackwardClick
  render() {
    return (
      <div>
        <img
          style={styles.img}
          src={this.props.images[this.state.current]}
          alt={'Image '+ (this.state.current+1) + ' of ' + (this.state.max+1)}
        />
        <FaAngleDoubleLeft
          onClick={this.handleBackwardClick}
          style={styles.back}
        />
       <FaAngleDoubleRight
          onClick={this.handleForwardClick}
          style={styles.fwd}
        />

        <p className={'text-center'}>
          {'Image '+ (this.state.current+1) + ' of ' + (this.state.max+1)}
        </p>

        <div className={'text-center'}>
          {this.props.images.map((image, index)=>{
            return (
              <FaCircle key={index} style={styles.faBtn}/>
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
