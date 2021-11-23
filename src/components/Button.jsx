import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, className, icon, type}) {
  return (
    <button
      type={ type }
      name={ name }
      className={ className }
      id={ name }
    >
      { icon }
      { name }
    </button>
  )
}

const { string } = PropTypes;

Button.propTypes = {
  name: string,
  className: string,
  icon: string,
}.required;

export default Button;
