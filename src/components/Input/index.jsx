import React, { Fragment } from "react";
import propTypes from 'prop-types';


const Input = ({ id, type, placeholder, name, value, onChange }) => {
  return (
    <Fragment>
        <input
          className="form-control mt-3"
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
    </Fragment>
  );
};

Input.defaultProps ={
  placeholder : "Product"
}

Input.propTypes={
  type: propTypes.string,
  placeholder: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
}
export default Input;
