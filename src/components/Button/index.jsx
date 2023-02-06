import React, { Fragment } from "react";

const Button = ({ type, id, title, onClick }) => {
  return (
    <Fragment>
      <button
        className="btn btn-outline-secondary bg-secondary bg-gradient text-white mt-3"
        type={id}
        id={type}
        onClick={onClick}
      >
        {title}
      </button>
    </Fragment>
  );
};

export default Button;
