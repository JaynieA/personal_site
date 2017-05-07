import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Alert from './Alert';

const Form = (props) => (
  <div className='form-wrap'>
    <form className='form-label' onSubmit={props.onSubmit}>
      {props.children}
      <Button
        type={'submit'}
        className={props.btnInfo.className}
        controlFunc={props.btnInfo.controlFunc}
        content={props.btnInfo.text}
      />
    {props.submitted &&
      <Alert
        text={props.alertInfo.text}
        type={props.alertInfo.type}
      />
    }
    </form>
  </div>
)

Form.propTypes = {
  submitted: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  btnInfo: PropTypes.shape({
    className: PropTypes.string,
    controlFunc: PropTypes.func,
    text: PropTypes.string.isRequired
  }),
  alertInfo: PropTypes.shape({
    type: PropTypes.oneOf(['success', 'error', 'default']).isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Form;
