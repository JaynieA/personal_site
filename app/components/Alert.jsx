import React from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => (
  <div className={`alert ${props.type}`}>
    <p>{props.content}</p>
  </div>
)

Alert.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'default']).isRequired
}

export default Alert;
