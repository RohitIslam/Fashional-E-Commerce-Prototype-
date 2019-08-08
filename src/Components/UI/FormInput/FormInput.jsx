import React from "react";

import "./FormInput.scss";

const FormInput = ({ changeHandler, label, ...otherInputProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={changeHandler}
        {...otherInputProps}
      />
      {label ? (
        <label
          className={`${
            otherInputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
