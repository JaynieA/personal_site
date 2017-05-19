import React from 'react';
import PropTypes from 'prop-types';

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
    textAlign: 'right'
  },
  back: {
    float: 'left',
    width: '50%',
    display: 'inline'
  }
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      max: null
    }
  }
  componentDidMount() {
    this.setState(()=>{
      const max = this.props.images.length - 1;
      return {
        current: 0,
        max: max
      }
    })
  }
  handleForwardClick = () => {
    console.log('handleForwardClick');
    let newImg;
    this.state.current < this.state.max
     ? newImg = this.state.current + 1
     : newImg = 0
    this.setState({current: newImg});
  }
  handleBackwardClick = () => {
    console.log('in handleBackwardClick');
    let newImg;
    let min = 0;
    this.state.current === min
     ? newImg = this.state.max
     : newImg = this.state.current - 1
    this.setState({current: newImg});
  }
  render() {
    return (
      <div>
        <img
          style={styles.img}
          src={this.props.images[this.state.current]}
          alt={'Image '+ (this.state.current+1) + ' of ' + (this.state.max+1)}
        />
        <p
          onClick={this.handleBackwardClick}
          style={styles.back}
          > BACK
        </p>
        <p
          onClick={this.handleForwardClick}
          style={styles.fwd}
          >FORWARD >>>
        </p>

        <p className={'text-center'}>
          {'Image '+ (this.state.current+1) + ' of ' + (this.state.max+1)}
        </p>
      </div>
    )
  }
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired
};

export default Carousel;
