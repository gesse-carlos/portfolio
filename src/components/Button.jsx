import React from "react";
import PropTypes from "prop-types";

function Button({ name, className, icon, src}) {
  return (
    <a href={ src} target="_blank" rel="noreferrer">
      <button type="button" name={name} className={className} id={name}>
        <span className="button-text-container">
          {icon}
          <span className="button-text">{name}</span>
        </span>
      </button>
    </a>
  );
}

const { string } = PropTypes;

Button.propTypes = {
  name: string,
  className: string,
  icon: string,
  src: string,
}.required;

export default Button;
