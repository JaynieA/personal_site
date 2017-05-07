import React from 'react';
import PropTypes from 'prop-types';

const SingleInput = (props) => (
  <fieldset>
    <input
      id={props.id}
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      onBlur={props.onBlur}
      className={props.className}
      required
    />
    <label htmlFor={props.id}>{props.title}</label>
  </fieldset>
)

SingleInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOf(['off', 'on']).isRequired,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SingleInput;
