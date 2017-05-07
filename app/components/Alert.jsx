import React from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => (
  <div className={`alert ${props.type}`}>
    <p>{props.text}</p>
  </div>
)

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'default']).isRequired
}

export default Alert;
