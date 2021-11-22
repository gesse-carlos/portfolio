import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, className, icon, src}) {
  return (
    <button
      name={ name }
      className={ className }
      id={ name }
    >
      { icon }
      <a href={ src } target="_blank" rel="noreferrer">
        { name }
      </a>
    </button>
  )
}

const { string } = PropTypes;

Button.propTypes = {
  name: string,
  src: string,
  className: string,
  icon: string,
}.required;

export default Button;
