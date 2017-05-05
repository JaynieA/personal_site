import React from 'react';
import PropTypes from 'prop-types';

const TextArea = (props) => (
  <fieldset>
    <textarea
      id={props.id}
      name={props.name}
      value={props.content}
      rows={props.rows}
      autoComplete={props.autocomplete}
      onChange={props.controlFunc}
      style={props.resize ? null : {resize: 'none'}}
      placeholder={props.placeholder}
      required
    />
    <label htmlFor={props.id}>{props.title}</label>
  </fieldset>
)

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  autoComplete: PropTypes.oneOf(['off', 'on']).isRequired,
  controlFunc: PropTypes.func.isRequired,
  resize: PropTypes.bool,
  placeholder: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default TextArea;
