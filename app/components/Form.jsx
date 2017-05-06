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
        className={props.btnClassName}
        controlFunc={props.btnControlFunc}
        content={props.btnText}
      />
    {props.submitted &&
      <Alert
        content={props.alert}
        type={props.alertType}
      />
    }
    </form>
  </div>
)

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  btnClassName: PropTypes.string.isRequired,
  btnControlFunc: PropTypes.func,
  btnText: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  alert: PropTypes.string.isRequired,
  alertType: PropTypes.oneOf(['success', 'error', 'default']).isRequired
};

export default Form;
