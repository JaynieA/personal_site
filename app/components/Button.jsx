import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button
    type={props.type}
    className={`button ${props.className}`}
    onClick={props.controlFunc} >
    {props.content}
  </button>
)

Button.PropTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  className: PropTypes.string.isRequired,
  controlFunc: PropTypes.func,
  content: PropTypes.string.isRequired
};

export default Button;
